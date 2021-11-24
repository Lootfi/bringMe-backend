import {
  gql
} from "apollo-server";

const typeDefs = gql `
    type User {
      id: ID!
      username: String!
      email: String!
      password: String!
      created_at: String!
      updated_at: String!
      documents: [Document]
    }
    type LoginResponse {
      ok: Boolean!
      token: String
      error: String
    }
    type Query {
      users: [User!]!
      user(username: String!): User
    }
    type Mutation {
      createAccount(username: String!, email: String!, password: String!): User
      loginUser(username: String!, password: String!): LoginResponse!
      updateUser(id: Int!, username: String, email: String, password: String): User
      deleteUser(id: Int!): User
    }
  `;

export default typeDefs;