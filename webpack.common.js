// webpack modules for development and production mode
const path = require("path");
module.exports = {
  entry: "./src/app.js",

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              /* name: "[name][hash].[ext]",
              outputPath: "imgs", */
              name: "[name][hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
