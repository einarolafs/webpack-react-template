const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = require('../paths')

module.exports = () => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(paths.contentBase, 'index.html'),
      })
    ]
  }
}
