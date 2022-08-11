import { PrismaSelect } from "@paljs/plugins"
import { Context } from "apollo-server-core";
import { GraphQLResolveInfo } from "graphql";

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