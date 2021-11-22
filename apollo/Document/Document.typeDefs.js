import {
    gql
} from "apollo-server";

const typeDefs = gql `
    type Document {
      id: ID!
      name: String!
      createdAt: String!
      user: User!
    }
    type Query {
      documents: [Document]
      document(id: ID!): Document
    }
    type Mutation {
      createDocument(name: String!, userId: Int!): Document
      updateDocument(id: Int!, name: String): Document
      deleteDocument(id: Int!): Document
    }
  `;

export default typeDefs;