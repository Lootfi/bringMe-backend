import {
  ApolloServer
} from "apollo-server";
import typeDefs from "./apollo/typeDefs";
import Query from "./apollo/queries"
import Mutation from './apollo/mutations'
import Entity from './apollo/entities'

const resolvers = {
  ...Entity,
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});