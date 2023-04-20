import { GraphQLError } from "graphql";
import { Context } from "../../context";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = {
	Query: {
		me: async (_parent, args, { authorization, prisma }: Context, info) => {
			const tokenized: any = jwt.verify(
				authorization,
				process.env["USER_SECRET"] || "secret",
			);
			return prisma.user.findUnique({ where: { id: tokenized.id } });
		},
	},
	Mutation: {
		signIn: async (_parent, args, { prisma }: Context, info) => {
			const user = await prisma.user.findUnique({
				where: { login: args?.data?.login },
			});
			if (!user) {
				throw new GraphQLError("USER_NOT_FOUND");
			}
			const compare = bcrypt.compareSync(args.data.password, user.password);
			if (!compare) throw new GraphQLError("INCORRECT_PASSWORD");
			const token = await jwt.sign(
				{ id: user.id, role: user.role },
				process.env[`USER_SECRET`],
			);
			return {
				status: "SUCCESS",
				token,
			};
		},
		signUp: async (_parent, args, { prisma }: Context, info) => {
			let { data } = args;
			data.password = await bcrypt.hashSync(data.password, 10);
			const user = await prisma.user.create({ data });

			const token = jwt.sign(
				{ id: user.id, role: user.role },
				process.env[`USER_SECRET`],
			);

			return {
				status: "Success",
				token,
			};
		},
		editSelf: async (
			_parent,
			args,
			{ authorization, prisma }: Context,
			info,
		) => {
			const { id }: any = jwt.verify(
				authorization,
				process.env["USER_SECRET"] || "secret",
			);

			return prisma.user.update({ where: { id }, ...args });
		},
	},
};

export default User;
