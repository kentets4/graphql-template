const User = `#graphql
   	type User {
		id: String!
		role: String! @auth(requires: ADMIN)
		name: String!
		surname: String!
		blocked: Boolean!
   	}

	type Query {
		me: User!
	}

	type AuthType {
		status: String!
		token: String
	}

	input EditSelfDataInput {
		name: StringFieldUpdateOperationsInput
		surname: StringFieldUpdateOperationsInput
	}

	input SignInDataInput {
		login: String!
		password: String!
	}

	input SignUpDataInput {
		login: String!
		name: String!
		surname: String!
		password: String!
	}

	type Mutation {
		signIn(data: SignInDataInput!): AuthType!
		signUp(data: SignUpDataInput!): AuthType!
		editSelf(data: EditSelfDataInput!): User!
	}
	
`;

export default User;
