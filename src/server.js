var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const {makeExecutableSchema} = require('graphql-tools');
const { typeDefs, resolvers } = require('./graphql-schema');
 
var app = express();
graphqlSchema = makeExecutableSchema(
    {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
)

console.log(graphqlSchema);
app.use('/', graphqlHTTP(() => ({
  schema: graphqlSchema,
  graphiql: true,
})));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');