const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

const config = require('./config.json');

module.exports = (env, argv) => ({
    target: 'web',
    entry: {
        main: config.jsEntryFile
    },
    mode: env && env.production ? 'production' : 'development',
    devtool: env && env.production ? false : 'source-map',
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new LoadablePlugin()
    ]
});
