const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { libraies } = require('./libraries')

module.exports = () => {

    var libsManifests = Object.keys(libraies)
        .map((k) => {
            return new webpack.DllReferencePlugin({
                // context: __dirname,
                manifest: path.join(__dirname, "dist", "libs", k + "-manifest.json"),
            })
        })

    return {
        entry: {
            page1: {
                import: path.resolve(__dirname, "pages", "page1"),
            },
            page2: {
                import: path.resolve(__dirname, "pages", "page2"),
            },
            page3: {
                import: path.resolve(__dirname, "pages", "page3"),
            },
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
        // externals: {
        //     lodash: '_'
        // },
        plugins: [
            new CleanWebpackPlugin(),
            ...libsManifests,
        ],
    }
}
