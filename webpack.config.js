const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyLibrary",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
};
