import { ApolloServer } from 'apollo-server';

import GhibliAPI from './api/GhibliAPI';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ghibliAPI: new GhibliAPI(),
  }),
  playground: true,
  introspection: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
