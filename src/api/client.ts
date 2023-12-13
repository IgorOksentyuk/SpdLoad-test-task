import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from "graphql-tag";


export const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export const ROCKETS_QUERY = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;