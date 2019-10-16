// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createrRouter} from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */
//El:’#app相当于document.getElementbyId(‘#app’ 但是在node.js中识别不了这种语法，所以我们不能这样写
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

export function createApp(){
	const router = createrRouter();
	const app = new Vue({
		router,
		components:{App},
		template:'<App/>'
	})

	return {app}
}
