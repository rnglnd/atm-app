const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  target: "web",
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
    port: 3000
  }
};
