const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = process.env.npm_lifecycle_event

const baseConfig = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, 'src/app.js')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        // include: path.join(__dirname, 'src'),
        loaders: 'pug-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './build',
    hot: true
  },
  mode: 'development'
}

if (MODE === 'dev') {
  module.exports = Object.assign({}, baseConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.pug',
        inject: true,
        filename: 'index.html'
      })
    ]
  })
} else {
  module.exports = baseConfig
}
