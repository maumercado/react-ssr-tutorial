const path = require("path");

module.exports = {
    entry: "./src/client/index.js",
    output: { filename: "bundle.js", path: path.resolve(__dirname, "public") },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["babel-preset-env", "react"],
                    plugins: [
                        [
                            "transform-runtime",
                            {
                                polyfill: false,
                                regenerator: true
                            }
                        ]
                    ]
                }
            }
        ]
    }
};
