const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "application.js",
    libraryTarget: "this",
    library: "STGroup",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "dist"),
      path.resolve(__dirname, "node_modules"),
    ],
    compress: false,
    port: 3800,
  },
};
