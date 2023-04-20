import { ContextFunction } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/dist/esm/express4";
import { checkRole } from "./utils/auth";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export interface Context {
	authorization?: string;
	prisma: PrismaClient;
}

const prisma = new PrismaClient();

export const context: ContextFunction<
	[ExpressContextFunctionArgument],
	Context
> = async ({ req }) => {
	const { authorization } = req.headers;

	return {
		authorization,
		prisma,
	};
};
