import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../modules/Home.vue'

import bookRoutes from '../modules/book/route/index'
import authRoutes from '../modules/auth-service/route/index'

import Home from '../modules/auth-service/pages/sign-in/login.vue'

Vue.use(VueRouter)

const dynamicRoutes = [

	{
		path: '/',
		name: 'Home',
		component: Home
	},

	{
		path: '/home',
		name: '/home_page',
		component: HomePage
	}

]

const routes = [
	...bookRoutes,
	...dynamicRoutes,
	...authRoutes
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.VUE_APP_BASE_URL,
	routes
})

export default router