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
  type Document {
    id: ID!
    name: String!
    createdAt: String!
    user: User!
  }
  type Query {
    documents: [Document]
    users: [User!]!
    user(id: ID!): User
    document(id: ID!): Document
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: Int!, username: String, email: String, password: String): User
    deleteUser(id: Int!): User
    createDocument(name: String!, userId: Int!): Document
    updateDocument(id: Int!, name: String): Document
    deleteDocument(id: Int!): Document
  }
`;

export default typeDefs;