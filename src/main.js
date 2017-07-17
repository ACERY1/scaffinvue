import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui' // 导入elementUI
import 'element-ui/lib/theme-default/index.css'
import routes from './router/index' // 导入路由路径配置

// register vueRouter
Vue.use(VueRouter)

// 注册使用elementUI
Vue.use(ElementUI)

//配置路由
const router = new VueRouter({
	mode:'history',
	routes
})

Vue.config.productionTip = false

/*实例化root_Vue实例*/
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
})
