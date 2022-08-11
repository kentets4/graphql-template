import { PrismaClient } from "@prisma/client";
import { checkRole } from "./utils/auth";

const prisma = new PrismaClient();

export interface Context {
	prisma: PrismaClient;
   checkToken: () => Object
}

export function createContext({ req }): Context {
	const { authorization } = req.headers;

	const checkToken = async () => {
		const roles = ["USER", "ADMIN"];
		const checks = await Promise.all(
			roles.map(async (role) => {
				return await checkRole(authorization, role, prisma, false);
			})
		);
		const find = checks.find((object) => object);
		if (!find) throw new Error("Token timeout");
		return find;
	};

	return {
		prisma,
		checkToken,
	};
}
