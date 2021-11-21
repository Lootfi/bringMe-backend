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
    deleteUser(userId: Int!): Boolean
    createDocument(title: String!, userId: Int!): Document
    deleteDocument(docId: Int!): Boolean
  }
`;

export default typeDefs;