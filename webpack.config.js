const path = require('path');
const content = require(path.join(__dirname, 'tmp', 'template.string.js')).string
const CreateFileWebpack = require('create-file-webpack');
const dotenv = require('dotenv');
dotenv.config()
const opts = {
  path: './',
  fileName: 'nuxt.config.js',
  content: content
};
module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'tmp', 'template.string.js')
  },
  plugins: [
    new CreateFileWebpack(opts)
  ]
}