import {
    gql
} from "apollo-server";

const typeDefs = gql `
    type User {
      id: ID!
      username: String!
      email: String!
      password: String!
      documents: [Document]
    }
    type Query {
      users: [User!]!
      user(id: ID!): User
    }
    type Mutation {
      createUser(username: String!, email: String!, password: String!): User
      updateUser(id: Int!, username: String, email: String, password: String): User
      deleteUser(id: Int!): User
    }
  `;

export default typeDefs;