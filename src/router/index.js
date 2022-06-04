//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

//配置路由
export default new VueRouter({
	//配置路由
	routes:[
		{
			path:"/",
			name:"Login",
			component:Login
		},
		{
			path:"/home",
			component:Home
		},
		{
			path:"/About",
			component:About
		},
		{
			path:"/Register",
			component:Register
		},
		
	]
})