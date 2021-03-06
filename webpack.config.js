const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new htmlWebpackPlugin({ 
      template: path.resolve(__dirname, 'public', 'index.html'),
      
    }),
    new CleanWebpackPlugin(),
  ],
};