require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const GraphQLLongInt = require('graphql-type-long');
const rootQueryResolver = require('./resolvers/rootQueryResolver')

const resolvers = {
  Long: GraphQLLongInt,
  Query: {
    ...rootQueryResolver
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
    console.log(`GraphQL Server ready at ${url}`);
});