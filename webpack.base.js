module.exports = {
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
