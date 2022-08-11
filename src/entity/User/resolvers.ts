import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = {
	Query: {
		me: () => {
			return {
				id: "123",
				name: "321",
			};
		},
	},
	Mutation: {
		signIn: async (_parent, args, { prisma }: { prisma: PrismaClient }) => {
			const user = await prisma.user.findUnique({
				where: { email: args?.data?.email },
			});
			if (!user) {
				throw new Error("USER_NOT_FOUND");
			}
			const compare = bcrypt.compareSync(args.data.password, user.password);
			if (!compare) throw new Error("INCORRECT_PASSWORD");
			const token = await jwt.sign({ id: user.id }, process.env[`USER_SECRET`]);
			return {
				token,
				status: "SUCCESS",
			};
		},
		signUp: async (_parent, args, { prisma }: { prisma: PrismaClient }) => {
			let { data } = args;
			data.password = await bcrypt.hashSync(data.password, 10);
			const user = await prisma.user.create({ data });

			const token = jwt.sign({ id: user.id }, process.env[`USER_SECRET`]);

			return {
				status: "Success",
				token,
			};
		},
	},
};

export default User;
