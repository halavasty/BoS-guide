import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL || 'http://localhost:2337/graphql',
  cache: new InMemoryCache(),
});
