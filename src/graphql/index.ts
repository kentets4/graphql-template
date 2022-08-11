import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { sdlInputs } from "@paljs/plugins"
import resolversArray from "../entity/resolvers"
import typeDefsArray from "../entity/typeDefs"
import generatedResolvers from '../generated/resolvers'
import generatedTypeDefs from '../generated/typeDefs'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js'

const GraphQLSetup = () => {
	const typeDefs = mergeTypeDefs([sdlInputs(), ...typeDefsArray, generatedTypeDefs])

	const resolvers = mergeResolvers([...resolversArray, ...generatedResolvers, {Upload: GraphQLUpload}])

	const schema = makeExecutableSchema({ typeDefs, resolvers })

	return {
		typeDefs,
		resolvers,
		schema
	}
}

export default GraphQLSetup() 