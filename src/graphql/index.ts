import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolversArray from "../entity/resolvers";
import typeDefsArray from "../entity/typeDefs";
import { getUserJWT } from "../utils/auth";
import { authDirective } from "./authDirective";

import generatedResolvers from "./../generated/resolvers";
import generatedTypeDefs from "./../generated/typeDefs";

const GraphQLSetup = () => {
	const { authDirectiveTransformer, authDirectiveTypeDefs } = authDirective(
		"auth",
		getUserJWT,
	);

	const typeDefs = mergeTypeDefs([
		...typeDefsArray,
		authDirectiveTypeDefs,
		generatedTypeDefs,
	]);

	const resolvers = mergeResolvers([
		...resolversArray,
		...generatedResolvers
	]);

	const schema = authDirectiveTransformer(
		makeExecutableSchema({ typeDefs, resolvers }),
	);

	return {
		typeDefs,
		resolvers,
		schema,
	};
};

export default GraphQLSetup();
