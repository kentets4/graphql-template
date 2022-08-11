import { mergeTypeDefs } from "@graphql-tools/merge";
import User from "./User/typeDefs";
import generated from '../generated/typeDefs'
import { gql } from "apollo-server-core";

const Initial = gql`
   scalar DateTime
   scalar Upload
`

const typeDefsArray = [User, generated, Initial];

export default typeDefsArray;
