
var { buildSchema } = require('graphql');
class MoranModule {
    constructor(schema, resolver) {
      this.schema = buildSchema(schema)
      this.resolver = resolver
    }
    
    graphQLConfig(type) {
        let rootNode = this.schema.getType("root");
        if(type){
            var types = Object.values(this.schema.getTypeMap()).filter(t => !t.name.match(/^__/));
            for(let node of types){
                if(node.astNode && node.astNode.kind != "NamedType"){
                    node.name = type+"_"+node.name;
                }
            }
        }
        return {
            type: rootNode,
            // `args` describes the arguments that the `user` query accepts
            resolve: () => this.resolver
          }
    }
}
module.exports = MoranModule