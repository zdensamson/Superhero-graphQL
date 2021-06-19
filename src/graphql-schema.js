const { GraphQLJSON } = require('graphql-type-json');
const {getDcData} = require('./data-services/dc-service');
const {getMarvelData} = require('./data-services/marvel-service');

const typeDefs = `
    scalar JSON

    type Hero {
        name: String
    }

    type Marvel {
        xmen: [Hero]
        avengers: [Hero]
    }

    type DC {
        justiceLeague: [Hero]
    }

    schema {
        query: Query
    }

    type Query {
        hello: String!
        marvelData: Marvel
        dcData: DC
    }
`;

const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        hello: () => 'Hello, World',
        marvelData: () => getMarvelData(),
        dcData: () => getDcData()
    }
};

module.exports = { typeDefs, resolvers };