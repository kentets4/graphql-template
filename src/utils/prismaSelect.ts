import { PrismaSelect } from "@paljs/plugins"
import { GraphQLResolveInfo } from "graphql";
import { Context } from "../context";

const PrismaSelectMiddleware = async (
	resolve,
	root,
	args,
	context: Context,
	info: GraphQLResolveInfo
) => {
	const result = new PrismaSelect(info).value;
	if (!result.select || Object.keys(result.select).length > 0) {
		args = {
			...args,
			...result,
		};
	}
	return resolve(root, args, context, info);
};

export default PrismaSelectMiddleware