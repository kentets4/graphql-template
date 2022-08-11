import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Post?: Post
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregatePost?: AggregatePost
  PostGroupByOutputType?: PostGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, string>
  email?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string | null>
  password?: Resolver<Client.User, {}, string>
  posts?: Resolver<Client.User, UserPostsArgs, Client.Post[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export interface Post {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Post, {}, string>
  title?: Resolver<Client.Post, {}, string>
  content?: Resolver<Client.Post, {}, string | null>
  published?: Resolver<Client.Post, {}, boolean>
  author?: Resolver<Client.Post, {}, Client.User>
  authorId?: Resolver<Client.Post, {}, string>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
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
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
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

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
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

export interface AggregatePost {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface PostGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  content?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string | null>
  published?: Resolver<Client.Prisma.PostGroupByOutputType, {}, boolean>
  authorId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>
  posts?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface PostCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  content?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  published?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  authorId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export interface PostMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
  published?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    boolean | null
  >
  authorId?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
}

export interface PostMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
  published?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    boolean | null
  >
  authorId?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface UserPostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
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

export interface FindFirstPostArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindManyPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export interface AggregatePostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PostCountAggregateInputType
  _min?: Client.Prisma.PostMinAggregateInputType
  _max?: Client.Prisma.PostMaxAggregateInputType
}

export interface GroupByPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithAggregationInput[]
  by: PostScalarFieldEnum[]
  having?: PostScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null
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
  data: UserCreateManyInput[]
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

export interface CreateOnePostArgs {
  data: PostCreateInput
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export interface CreateManyPostArgs {
  data: PostCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null
  where: PostWhereUniqueInput | null
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput
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
  email?: StringFilter
  name?: StringNullableFilter | null
  password?: StringFilter
  posts?: PostListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  posts?: PostOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: string
  email?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  email?: StringWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  password?: StringWithAggregatesFilter
}

export interface PostWhereInput {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: StringFilter
  title?: StringFilter
  content?: StringNullableFilter | null
  published?: BoolFilter
  author?: UserWhereInput
  authorId?: StringFilter
}

export interface PostOrderByWithRelationInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  author?: UserOrderByWithRelationInput
  authorId?: SortOrder
}

export interface PostWhereUniqueInput {
  id?: string
}

export interface PostOrderByWithAggregationInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  authorId?: SortOrder
  _count?: PostCountOrderByAggregateInput
  _max?: PostMaxOrderByAggregateInput
  _min?: PostMinOrderByAggregateInput
}

export interface PostScalarWhereWithAggregatesInput {
  AND?: PostScalarWhereWithAggregatesInput[]
  OR?: PostScalarWhereWithAggregatesInput[]
  NOT?: PostScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  title?: StringWithAggregatesFilter
  content?: StringNullableWithAggregatesFilter | null
  published?: BoolWithAggregatesFilter
  authorId?: StringWithAggregatesFilter
}

export interface UserCreateInput {
  id?: string
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateInput {
  id?: string
  email: string
  name?: string | null
  password: string
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
}

export interface UserCreateManyInput {
  id?: string
  email: string
  name?: string | null
  password: string
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface PostCreateInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
  author: UserCreateNestedOneWithoutPostsInput
}

export interface PostUncheckedCreateInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
  authorId: string
}

export interface PostUpdateInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  author?: UserUpdateOneRequiredWithoutPostsInput
}

export interface PostUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  authorId?: StringFieldUpdateOperationsInput
}

export interface PostCreateManyInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
  authorId: string
}

export interface PostUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  authorId?: StringFieldUpdateOperationsInput
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

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export interface PostOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
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

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export interface PostCountOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  authorId?: SortOrder
}

export interface PostMaxOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  authorId?: SortOrder
}

export interface PostMinOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  authorId?: SortOrder
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface PostUncheckedCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface PostUncheckedUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutPostsInput
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

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
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

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostCreateWithoutAuthorInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
}

export interface PostUncheckedCreateWithoutAuthorInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
}

export interface PostCreateOrConnectWithoutAuthorInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostCreateManyAuthorInputEnvelope {
  data: PostCreateManyAuthorInput[]
  skipDuplicates?: boolean
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUncheckedUpdateWithoutAuthorInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUncheckedUpdateWithoutAuthorInput
}

export interface PostUpdateManyWithWhereWithoutAuthorInput {
  where: PostScalarWhereInput
  data: PostUncheckedUpdateManyWithoutPostsInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: StringFilter
  title?: StringFilter
  content?: StringNullableFilter | null
  published?: BoolFilter
  authorId?: StringFilter
}

export interface UserCreateWithoutPostsInput {
  id?: string
  email: string
  name?: string | null
  password: string
}

export interface UserUncheckedCreateWithoutPostsInput {
  id?: string
  email: string
  name?: string | null
  password: string
}

export interface UserCreateOrConnectWithoutPostsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUncheckedUpdateWithoutPostsInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpdateWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface PostCreateManyAuthorInput {
  id?: string
  title: string
  content?: string | null
  published?: boolean
}

export interface PostUpdateWithoutAuthorInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateWithoutAuthorInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  password = 'password',
}
export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  content = 'content',
  published = 'published',
  authorId = 'authorId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
