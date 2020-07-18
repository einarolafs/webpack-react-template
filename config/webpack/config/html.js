const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = require('../paths')

module.exports = () => {
  let minify = {}

  if (process.env.NODE_ENV === 'production') {
    minify = {
      removeComments: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      collapseWhitespace: true,
      useShortDoctype: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }

  return {
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(paths.contentBase, 'index.html'),
        minify
      })
    ]
  }
}
