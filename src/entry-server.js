/*entry-server.js*/
//整个服务端的入口
import {createApp} from './main'

export default context=>{//context是从后端返回来的对象
	return new Promise((resolve, reject)=>{
		const {app} = createApp()//创建app

		const router = app.$router//创建路由
	
		const {url} = context
		const {fullPath} = router.resolve(url).route

		if(fullPath !==url){
			return reject({url: fullPath})
		}

		//更改路由
		router.push(url)

		router.onReady(()=>{
			const matchedCompontents = router.getMatchedComponents()
			if(!matchedCompontents.length){
				return reject({ code:404 })
			}
			resolve(app)
		}, reject)
	})
}