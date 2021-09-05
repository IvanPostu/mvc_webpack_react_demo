var webpack = require('webpack')
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        lodash: ['lodash'],
        jquery: 'jquery',
        jstree: 'jstree',
        moment: 'moment',
        react: 'react',
        'react-dom': 'react-dom'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist', 'libs'),
        library: 'vendor_lib'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: 'vendor_lib',
            path: path.join(__dirname, 'dist', 'libs', 'vendor-manifest.json')
        })
    ]
}