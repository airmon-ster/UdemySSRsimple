const path = require('path')

module.exports = {
    // inform webpack that we are building a bundle for nodejs rather than the browser
    target: 'node',
    // tell webpack the entry point
    entry: './src/index.js',
    // tell webpack where to put the output file after generation
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // webpack to run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}