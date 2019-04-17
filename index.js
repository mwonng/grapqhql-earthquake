require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const GraphQLLongInt = require('graphql-type-long');
const fetchFromSource = require('./resolvers/fetchFromSource')

const resolvers = {
  Long: GraphQLLongInt,
  Query: {
    hello: () => 'Hello World',
    ...fetchFromSource
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
    console.log(`GraphQL Server ready at ${url}`);
});