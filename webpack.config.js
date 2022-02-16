const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/main.js",
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "app"),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,

    open: true,
    // compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./${filename("css")}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  stats: {
    children: true,
  },
};
