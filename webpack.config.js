module.exports = {
    entry: "./views/app.js",
    output: {
        path: __dirname,
        filename: "./assets/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};
