import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/schema.graphql';
import resolvers from './resolvers';
import dataSources from './data-sources';
import { introspection } from '../config';
import { formatError, context, playground } from './config';

const server = new ApolloServer({
  context,
  dataSources,
  formatError,
  introspection,
  playground,
  resolvers,
  typeDefs,
});

export default server;
