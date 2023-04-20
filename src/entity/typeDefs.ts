import User from "./User/typeDefs";

const Initial = `#graphql
   scalar DateTime
   scalar Upload
   scalar Json
`;

const typeDefsArray = [User, Initial];

export default typeDefsArray;
