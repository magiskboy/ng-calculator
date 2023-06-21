const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV === "production" ? "production" : "development";


module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, 'src', 'app.module.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.css', '.html']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "index.html",
  })],
}
