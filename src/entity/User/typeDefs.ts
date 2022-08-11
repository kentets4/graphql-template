import { gql } from "apollo-server-core";

const User = gql`
   input SignInInput {
      email: String!
      password: String!
   }

   input SignUpInput {
      email: String!
      name: String!
      password: String!
   }

	type Auth {
		token: String
		status: String!
	}

	type Query {
		me: User
	}

	type Mutation {
		signIn(data: SignInInput): Auth!
		signUp(data: SignUpInput): Auth!
	}
`;

export default User;
