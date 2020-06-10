const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    // tell webpack the entry point
    entry: './src/client/client.js',
    // tell webpack where to put the output file after generation
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)