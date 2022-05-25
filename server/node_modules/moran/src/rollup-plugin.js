const fs = require("fs")
const Moran = require("./moran")

module.exports = function(moranConfig, options) {
    let moran = new Moran(moranConfig)


    return {
      name: 'moran',
      load() {
      },
      resolveId() { /* ... */ },
      generateBundle() { /* ... */ },

      async transform(code, id){

        let queries = [];
        let matches = [...code.matchAll(/(\_\:)\s*([A-z]+)\s*\=\s*`([^`]*)`/), ...code.matchAll(/(\_\:)\s*([A-z]+)\s*\=\s*"([^"]*)"/), ...code.matchAll(/(\_\:)\s*([A-z]+)\s*\=\s*'([^']*)'/)]
        // console.log(matches)
        matches.forEach(match => {
            if(match){
                queries.push(new Promise(function(resolve, reject){
                    moran.query(match[3].trim()).then(function(result){
                        console.log(result)
                        resolve([result.data, match])
                    })
                }))
            }
        })
          var results = await Promise.all(queries)
            // console.log(results)
            for(var result of results){
                var match = result[1];
                code = code.replace(match[0], `let ${match[2]} = ${JSON.stringify(result[0])}`)
                // console.log(code)
            }
          return code
      }
      // ...
    }
  }