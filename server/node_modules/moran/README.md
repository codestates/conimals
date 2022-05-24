# Moran
Simple Data Layer for the JS Developer. Inspired by Svelte and Gatsby

## Getting Started
### Rollup
To define your modules for Moran simply create a moran.config.js file like this:
```javascript
var {TestDataModule} = require('moran')

exports.modules = {
    "testData": new TestDataModule()
}
```

Add the following to the rollup.config plugin list:
```javascript
MoranRollupPlugin(require('./moran.config'),{
    exclude: "node_modules/**"
}),
```
### Webpack
Not yet implemented, stay tune!

### Parcel
Not yet implemented, stay tume!

## Using Moran

### At compilation time
Then to use it in your project all you need to do is add a graphql query where you want a data object to exist
```javascript
	_: data = `{
                 testData {
                    hello
                 }
               }`
```
Note the _ label is before your data variable name. This is critical as the moran plugin looks for this _ to make a call to your data sources to populate that variable.

### At runtime
At runtime all you need to do is instantiate a moran object with the config file. 
```javascript
let {Moran} = require('moran')

let moran = new Moran(require('./moran.config'));

let result = moran.query(`{
                             testData {
                                hello
                             }
                           }`)
```

## Want to develop your own module??
It's simple! All you need is to define a schema and resolver for your data and pass it into the parent class 'MoranModule'!

```javascript
var MoranModule = require('./module')

class TestDataModule extends MoranModule {
    constructor(options) {
        if(options && options.paths){

        }
        let schema = `
            type TestObject2{
                test: String
            }
            type TestObject {
                test: TestObject2
            }
            type root {
                hello: String,
                testObject: TestObject
            }
        `;

        let resolver = {
            hello: () => {
                return 'Hello world!';
            },
            testObject: () => {
                return {
                    test: {
                        test: "test"
                    }
                }
            }
        };
        super(schema, resolver);
    }
}

module.exports = TestDataModule
```

### schema
The schema needs to include a type named "root". This is what will be used to define the modules schema when it is stiched with all the other schemas. 

### resolver

Define resolver for the objects within your schema. This can be used to call apis, load data from files or generate random data.