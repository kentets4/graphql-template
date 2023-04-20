import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> }
} & {
  User?: User
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
}

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, string>
  role?: Resolver<Client.User, {}, string>
  login?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string>
  surname?: Resolver<Client.User, {}, string>
  password?: Resolver<Client.User, {}, string>
  blocked?: Resolver<Client.User, {}, boolean>
}

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findFirstUserOrThrow?: Resolver<
    {},
    FindFirstUserOrThrowArgs,
    Client.User | null
  >
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findUniqueUserOrThrow?: Resolver<
    {},
    FindUniqueUserOrThrowArgs,
    Client.User | null
  >
}

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  role?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  login?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  surname?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  blocked?: Resolver<Client.Prisma.UserGroupByOutputType, {}, boolean>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  role?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  login?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  surname?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  blocked?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  role?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  login?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  surname?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  blocked?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    boolean | null
  >
}

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  role?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  login?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  surname?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  blocked?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    boolean | null
  >
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindFirstUserOrThrowArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindUniqueUserOrThrowArgs {
  where: UserWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  role?: StringFilter
  login?: StringFilter
  name?: StringFilter
  surname?: StringFilter
  password?: StringFilter
  blocked?: BoolFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  role?: SortOrder
  login?: SortOrder
  name?: SortOrder
  surname?: SortOrder
  password?: SortOrder
  blocked?: SortOrder
}

export interface UserWhereUniqueInput {
  id?: string
  login?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  role?: SortOrder
  login?: SortOrder
  name?: SortOrder
  surname?: SortOrder
  password?: SortOrder
  blocked?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  role?: StringWithAggregatesFilter
  login?: StringWithAggregatesFilter
  name?: StringWithAggregatesFilter
  surname?: StringWithAggregatesFilter
  password?: StringWithAggregatesFilter
  blocked?: BoolWithAggregatesFilter
}

export interface UserCreateInput {
  id?: string
  role?: string
  login: string
  name: string
  surname: string
  password: string
  blocked?: boolean
}

export interface UserUncheckedCreateInput {
  id?: string
  role?: string
  login: string
  name: string
  surname: string
  password: string
  blocked?: boolean
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  role?: StringFieldUpdateOperationsInput
  login?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  surname?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  role?: StringFieldUpdateOperationsInput
  login?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  surname?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
}

export interface UserCreateManyInput {
  id?: string
  role?: string
  login: string
  name: string
  surname: string
  password: string
  blocked?: boolean
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  role?: StringFieldUpdateOperationsInput
  login?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  surname?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  role?: StringFieldUpdateOperationsInput
  login?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  surname?: StringFieldUpdateOperationsInput
  password?: StringFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  role?: SortOrder
  login?: SortOrder
  name?: SortOrder
  surname?: SortOrder
  password?: SortOrder
  blocked?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  role?: SortOrder
  login?: SortOrder
  name?: SortOrder
  surname?: SortOrder
  password?: SortOrder
  blocked?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  role?: SortOrder
  login?: SortOrder
  name?: SortOrder
  surname?: SortOrder
  password?: SortOrder
  blocked?: SortOrder
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  role = 'role',
  login = 'login',
  name = 'name',
  surname = 'surname',
  password = 'password',
  blocked = 'blocked',
}
