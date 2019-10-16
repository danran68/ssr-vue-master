//客户端也要创建，因为客户端渲染和服务端渲染是两个不同的vue实例
import{createApp} from './main'

const {app} =createApp();
const router =app.$router;

//这里可以拿到app了，
window.onload=function(){
	app.$mount('#app')//在window加载完成之后
}