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