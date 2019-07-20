const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  target: "web",
  output: {
    publicPath: 'http://localhost:3001/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './html/index.html',
    })
  ],
  devServer: {
    devServer: {
      port: 3001,
      historyApiFallback: true,
    }
  }
};
