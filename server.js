const express = require('express')
const app = express()
const { ApolloServer, gql } = require('apollo-server-express');
const db=require('./dbConfig')

const typeDefs=require('./gql/schema');
const resolvers=require('./gql/resolvers')


const server = new ApolloServer({ typeDefs, resolvers });


server.applyMiddleware({ app ,path:'/graphql'});

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
