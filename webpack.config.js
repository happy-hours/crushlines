module.exports = {
  entry: "./src/index.jsx",
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
  }
};
