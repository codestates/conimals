
var { graphql, GraphQLObjectType, GraphQLSchema } = require('graphql');

class MoranQueryResult {
    constructor(data, query) {
        this.data = data;
        this.query = query;
    }
}

class Moran {
    constructor(moranConfig) {
        let fields =  Object.assign({}, ...Object.keys(moranConfig.modules).map(k => ({[k]: moranConfig.modules[k].graphQLConfig(k)})));
        var rootQueryType = new GraphQLObjectType({
            name: 'Query',
            fields: fields
        });

        this.graphQLSchema = new GraphQLSchema({query: rootQueryType})
    }

    async query(query){
        return new Promise(function(resolve, reject){
            graphql(this.graphQLSchema, query).then(data => {
                resolve(new MoranQueryResult(data.data, query))
            })
        }.bind(this))
    }
}
module.exports = Moran