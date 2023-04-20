import gql from 'graphql-tag'

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    role
    login
    name
    surname
    password
    blocked
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: StringFilter
    role: StringFilter
    login: StringFilter
    name: StringFilter
    surname: StringFilter
    password: StringFilter
    blocked: BoolFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    role: SortOrder
    login: SortOrder
    name: SortOrder
    surname: SortOrder
    password: SortOrder
    blocked: SortOrder
  }

  input UserWhereUniqueInput {
    id: String
    login: String
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    role: SortOrder
    login: SortOrder
    name: SortOrder
    surname: SortOrder
    password: SortOrder
    blocked: SortOrder
    _count: UserCountOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    role: StringWithAggregatesFilter
    login: StringWithAggregatesFilter
    name: StringWithAggregatesFilter
    surname: StringWithAggregatesFilter
    password: StringWithAggregatesFilter
    blocked: BoolWithAggregatesFilter
  }

  input UserCreateInput {
    id: String
    role: String
    login: String!
    name: String!
    surname: String!
    password: String!
    blocked: Boolean
  }

  input UserUncheckedCreateInput {
    id: String
    role: String
    login: String!
    name: String!
    surname: String!
    password: String!
    blocked: Boolean
  }

  input UserUpdateInput {
    id: StringFieldUpdateOperationsInput
    role: StringFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    surname: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    blocked: BoolFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    role: StringFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    surname: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    blocked: BoolFieldUpdateOperationsInput
  }

  input UserCreateManyInput {
    id: String
    role: String
    login: String!
    name: String!
    surname: String!
    password: String!
    blocked: Boolean
  }

  input UserUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    role: StringFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    surname: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    blocked: BoolFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    role: StringFieldUpdateOperationsInput
    login: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    surname: StringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    blocked: BoolFieldUpdateOperationsInput
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    role: SortOrder
    login: SortOrder
    name: SortOrder
    surname: SortOrder
    password: SortOrder
    blocked: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    role: SortOrder
    login: SortOrder
    name: SortOrder
    surname: SortOrder
    password: SortOrder
    blocked: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    role: SortOrder
    login: SortOrder
    name: SortOrder
    surname: SortOrder
    password: SortOrder
    blocked: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserCountAggregateOutputType {
    id: Int!
    role: Int!
    login: Int!
    name: Int!
    surname: Int!
    password: Int!
    blocked: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    role: String
    login: String
    name: String
    surname: String
    password: String
    blocked: Boolean
  }

  type UserMaxAggregateOutputType {
    id: String
    role: String
    login: String
    name: String
    surname: String
    password: String
    blocked: Boolean
  }
`
