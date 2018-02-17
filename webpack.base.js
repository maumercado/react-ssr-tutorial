module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["babel-preset-env", "react", "stage-2"],
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
