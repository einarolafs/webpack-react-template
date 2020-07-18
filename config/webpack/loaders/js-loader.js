const path = require('path')

module.exports = (options = {}) => ({
  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js?$/u,
        exclude: /node_modules/u,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: options.ci ? false : path.join(process.cwd(), 'build/cache/babel')
          }
        }
      }
    ]
  }
})
