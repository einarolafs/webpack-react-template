const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const sass = require('sass')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/u,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:6]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: sass
            }
          }
        ]
      },
      {
        test: /\.svg$/u,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true
    })
  ]
})
