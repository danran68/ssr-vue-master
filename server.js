const Vue = require('vue')
const express = require('express')();
//需要在服务端配置打包生成的客户端文件
const createApp = require('./dist/bundle.server.js')['default']
//客户端渲染文件
const exp = require('express');
//这个是客户端创建的vue实例，但是这个是在node环境下，如果在这里创建没有实现前后端分离
//const app = new Vue({template:' '})
///将静态文件目录设置为：项目根目录+/dist
express.use('/',exp.static(__dirname+'/dist'));
//客户端打包的文件
const clientBundleFileUrl = '/bundle.client.js'

const renderer = require('vue-server-renderer').createRenderer();

//创建vue实例
const app = new Vue({
	template:'<div>hello vue</div>'
})

//服务器渲染的核心就在于：
//通过vue-server-renderer插件的renderToString()方法，将vue实例转化为字符串插入到html中
express.get('*',(req,res)=>{
	const context = {url:req.url};
	createApp(context).then(app=>{//这个app就是刚刚打包之后的app
          renderer.renderToString(app, (err,html)=>{
		if(err){
			return res.state(500).end('运行错误')
		}
          //返回给浏览器一串html字符串
		res.send(`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>服务端渲染</title>
			<script src="${clientBundleFileUrl}"></script>
		</head>
		<body>
			${html}
		</body>
        </html>`)
	})
	})//取到entry.js里面的

	console.log('111')
})

express.listen(8888, ()=>{
	console.log('服务器已经启动8888')
})