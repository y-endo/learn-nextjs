import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import 'isomorphic-unfetch';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3001/api/apollo'
  })
});
