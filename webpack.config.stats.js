const webpack = require('webpack');
const base = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(
          'https://sampling2-dev-arryn.eu.sampling.qa.bazaarvoice.com'
        )
      }
    }),
    new BundleAnalyzerPlugin()
  ]
};
