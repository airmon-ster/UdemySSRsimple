const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // inform webpack that we are building a bundle for nodejs rather than the browser
    target: 'node',
    // tell webpack the entry point
    entry: './src/index.js',
    // tell webpack where to put the output file after generation
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)