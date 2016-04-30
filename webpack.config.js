const webpack = require("webpack");

module.exports = {
  entry: [
    "./src/index.jsx",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080/"
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
