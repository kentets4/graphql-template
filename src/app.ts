import startApolloServer from './server'

const { PrismaClient } = require('@prisma/client')

import resolvers from './entity/resolvers'
import typeDefs from './entity/typeDefs'

const prisma = new PrismaClient()

startApolloServer(typeDefs, resolvers, prisma)