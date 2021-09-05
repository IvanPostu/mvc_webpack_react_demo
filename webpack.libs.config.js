var webpack = require('webpack')
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {libraies} = require('./libraries')

module.exports = {
    entry: libraies,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist', 'libs'),
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', 'libs', "[name]-manifest.json"),
            name: "[name]"
        }),
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
    ]
}