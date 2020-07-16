const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.css', '.html']
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
  }
}
