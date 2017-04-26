'use strict';

const CleanPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const srcDir = path.join(__dirname, 'src');
const buildDir = path.join(__dirname, 'build');

module.exports = {
    entry: path.resolve(srcDir, 'index.js'),
    externals: [nodeExternals()],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: __dirname,
            exclude: /node_modules/,
        }]
    },
    output: {
        filename: 'handler.js',
        libraryTarget: 'commonjs',
        path: buildDir
    },
    plugins: [
        new CleanPlugin(buildDir),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: path.resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        }),
    ],
    resolve: {
        extensions: ['.js', '']
    },
    target: 'node'
};
