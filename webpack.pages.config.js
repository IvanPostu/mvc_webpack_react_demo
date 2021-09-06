const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { pages } = require('./pages')

module.exports = function(){

    const dynamicGeneratedWebpackConfigs = Object.keys(pages).map(page => {
        const libsObj = pages[page].libs
        const libsManifests = Object.keys(libsObj)
        .map((k) => {
            return new webpack.DllReferencePlugin({
                manifest: path.join(__dirname, "dist", "libs", k + "-manifest.json"),
            })
        })

        return {
            entry: {
                [page]: {
                    import: path.resolve(__dirname, "pages", page),
                }
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: "ts-loader",
                        exclude: /node_modules/,
                    },
                ],
            },
            resolve: {
                extensions: [".tsx", ".ts", ".js"],
            },
            output: {
                filename: "[name].js",
                path: path.resolve(__dirname, "dist", "pages"),
            },
            plugins: [
                // new CleanWebpackPlugin(),
                ...libsManifests
            ],
        }
    })

    return dynamicGeneratedWebpackConfigs
}
