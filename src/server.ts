import { ApolloServer } from 'apollo-server';
import ApolloServerLambda from 'apollo-server-lambda';

import GhibliAPI from './api/GhibliAPI';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

export const createLambdaServer = (): ApolloServerLambda.ApolloServer => {
  return new ApolloServerLambda.ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      ghibliAPI: new GhibliAPI(),
    }),
    introspection: true,
    playground: true,
  });
};

export const createLocalServer = (): ApolloServer => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      ghibliAPI: new GhibliAPI(),
    }),
    introspection: true,
    playground: true,
  });
};
