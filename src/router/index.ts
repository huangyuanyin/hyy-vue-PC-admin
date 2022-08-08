import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'
import Layout from '../views/layout/index.vue'
import Forbidden from '../views/errorPage/403.vue'
import NotFound from '../views/errorPage/404.vue'

import Function from '../views/function/index.vue'

// 初始化路由
const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/',
		name: 'Function',
		component: Function
	}
]

/**
 * 根据用户的权限不同,所能看到的页面和可操作性也不同
 * admin -> 所有用户都可以看到
 * vip   -> 属于vip的权限
 * svip  -> 更多vip的权限
 * 
 * 通过addRouter()的方式一个一个的往里面添加
 * 
 */
// 动态加载的路由
export const DynamicRoutes = [
	{
		path: "",
		component: Layout,
		name: "container",
		redirect: "home",
		meta: {
			requiresAuth: true, // 只有登录之后才能进入的页面
			name: "首页"
		},
		children: [
			{
				path: '/home',
				name: 'Home',
				component: Home,
				meta: {
					name: "首页", // name => 用来匹配规则,
					icon: "icon-name"
				}
			}
		]
	},
	{
		path: '/403',
		component: Forbidden
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
]

const router = createRouter({
	history: createWebHistory(),
	// base: process.env.BASE_URL,
	routes
})

export default router