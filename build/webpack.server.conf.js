//引入webpack的主要配置
const webpack = require('webpack')
const merge = require('webpack-merge')

//引入webpack.base.config这个文件是依赖这个基础文件的
const base = require('./webpack.base.conf')

module.exports=merge(base, {
	target:'node',//这里要写node 目的是让后端支持require语法
	entry:"./src/entry-server.js",//当你服务端在打包的时候，就会走这个入口
	output:{
		filename:'bundle.server.js',
		libraryTarget:'commonjs2'
	},
	plugins:[]
})