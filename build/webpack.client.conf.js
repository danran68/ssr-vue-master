const webpack = require('webpack')
const path = require('path')

function resolve(dir){
  return path.join(__dirname,'..',dir)
}

module.exports={
  entry:"./src/entry-client.js",//打包时走这个文件
  output:{
    path:path.resolve(__dirname,'../dist'),
    publicPath:'/dist/',
    filename:'bundle.client.js'
  },

  plugins:[],

  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      'vue$':'vue/dist/vue.esm.js',
      '@':resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions:{
            preserveWhitespace:false
          }
        }

      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  }
}
