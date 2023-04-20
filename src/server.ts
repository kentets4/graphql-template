import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyparser from "body-parser";
import GraphQLSetup from "./graphql";
import { Context, context } from "./context";
import { applyMiddleware } from "graphql-middleware";
import PrismaSelectMiddleware from "./utils/prismaSelect";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import chalk from "chalk";
import Keyv from "keyv";
import ioredis from "ioredis";

const { json } = bodyparser;

const PORT = process.env["PORT"] || 4000;

const checkEnv = (envs: string[]) => {
	let error = false;
	envs.forEach((env) => {
		if (!process.env[env]) {
			console.log(chalk.redBright(`[${env}] environment is missing`));
			error = true;
		}
	});
	return error;
};

let cache;

export const startServer = () => {
	let redis = new ioredis(6379);

	redis.on("error", async (err) => {
		if (process.env["NODE_ENV"] === "PROD") {
			throw err;
		}

		await redis.disconnect();
		console.log(chalk.red("Redis is disabled"));
		runServer(false);
	});

	redis.on("connect", async () => {
		console.log(chalk.green("Redis is enabled"));
		await redis.disconnect();
		runServer(true);
	});
};

const runServer = async (doCache) => {
	let needStop = false;

	if (checkEnv(["DATABASE_URL", "USER_SECRET"])) needStop = true;

	if (needStop) {
		console.log(chalk.bold.yellow("Server is shutting down"));
		return;
	}

	if (doCache) {
		cache = new KeyvAdapter(new Keyv("redis://localhost:6379"));
	}

	const app = express();

	const httpServer = http.createServer(app);

	const server = new ApolloServer<Context>({
		schema: applyMiddleware(GraphQLSetup.schema, PrismaSelectMiddleware),
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	app.use(
		"/graphql",
		cors<cors.CorsRequest>(),
		json(),
		expressMiddleware(server, {
			context,
		}),
	);

	await new Promise<void>((resolve) =>
		httpServer.listen({ port: PORT }, resolve),
	);
	console.log(
		chalk.green(
			`🚀 Server ready at ` +
				chalk.white.bold(`http://localhost:${PORT}/graphql`),
		),
	);
};
