import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    # password: String
    documents: [Document!]!
  }
  type Document {
    id: ID!
    name: String!
    createdAt: String!
    user: User!
  }
  type Query {
    documents: [Document!]!
    users: [User!]!
    user(id: ID!): User
    document(id: ID!): Document
  }
  type Mutation {
    createUser(username: String!, email: String!): Boolean
    createDocument(title: String!, userId: Int!): Boolean
  }
`;

const resolvers = {
  User: {
    id: (parent) => parent.id,
    username: (parent) => parent.username,
    email: (parent) => parent.email,
    documents: (parent) =>
      prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .documents(),
  },
  Document: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    createdAt: (parent) => parent.createdAt,
    user: (parent) =>
      prisma.document
        .findUnique({
          where: { id: parent.id },
        })
        .User(),
  },
  Query: {
    documents: () => prisma.document.findMany(),
    users: () => prisma.user.findMany(),
    user: (_, args) =>
      prisma.user.findFirst({
        where: { id: Number(args.id) },
      }),
    document: (_, args) =>
      prisma.document.findFirst({
        where: { id: Number(args.id) },
      }),
  },
  Mutation: {
    createUser: (_, { username, email }) =>
      prisma.user.create({
        data: {
          username,
          email,
        },
      }),
    createDocument: (_, { title, userId }) =>
      prisma.document.create({
        data: {
          title,
          userId,
        },
      }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
