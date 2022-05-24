var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { graphql,buildSchema, GraphQLObjectType, GraphQLString, GraphQLSchema} = require('graphql');
var moranConfig = require('./moran.config')
let fields =  Object.assign({}, ...Object.keys(moranConfig.modules).map(k => ({[k]: moranConfig.modules[k].graphQLConfig(k)})));


// Construct a schema, using GraphQL schema language
var rootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: fields
  });
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: new GraphQLSchema({query: rootQueryType}),
  rootValue: () => { test: () => testData.resolver},
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');