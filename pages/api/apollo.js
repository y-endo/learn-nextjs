import { ApolloServer, gql } from 'apollo-server-micro';

const users = [
  { name: 'AAA', age: 10 },
  { name: 'BBB', age: 20 },
  { name: 'CCC', age: 15 },
  { name: 'DDD', age: 30 },
  { name: 'EEE', age: 50 },
  { name: 'FFF', age: 60 },
  { name: 'GGG', age: 18 },
  { name: 'HHH', age: 19 }
];

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};
export default server.createHandler({ path: '/api/apollo' });
