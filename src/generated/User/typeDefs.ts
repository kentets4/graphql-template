import gql from 'graphql-tag'

export default gql`
  type User {
    id: String!
    role: String!
    login: String!
    name: String!
    surname: String!
    blocked: Boolean!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User @auth(requires: ADMIN)
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User @auth(requires: ADMIN)
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!] @auth(requires: ADMIN)
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int! @auth(requires: ADMIN)
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser @auth(requires: ADMIN)
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User! @auth(requires: ADMIN)
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User! @auth(requires: ADMIN)
    deleteOneUser(where: UserWhereUniqueInput!): User @auth(requires: ADMIN)
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User @auth(requires: ADMIN)
    deleteManyUser(where: UserWhereInput): BatchPayload @auth(requires: ADMIN)
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload @auth(requires: ADMIN)
  }
`
