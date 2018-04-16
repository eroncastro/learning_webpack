const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            // options: { attrs: { id: 'porra' } },
            options: {
              insertInto: () => document.querySelector('#lala').contentDocument.head
            }
          },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
