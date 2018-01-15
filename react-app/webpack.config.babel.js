var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'src/app')

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react']
            }
        }]
    },
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
        disableHostCheck: true,
        historyApiFallback: true
    },
}

module.exports = config