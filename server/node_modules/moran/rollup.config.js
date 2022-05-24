
var plugin = require("./src/rollup-plugin")

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        plugin(require('./moran.config'), {
            exclude: "node_modules/**"
        })
    ]
}