const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "index.js",
        libraryTarget: "commonjs2",
    },
    mode: "production", // Set the mode to 'production'
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
    },
};
