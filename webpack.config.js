'use strict';

const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
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
        path: path.join(__dirname, 'build')
    }
};
