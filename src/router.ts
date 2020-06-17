import Router, { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
	{ path: '/home', component: () => import('@/components/PageHome.vue') },
	{ path: '*', component: () => import('@/components/PageNotFound.vue') },
]

const router = new Router({
	mode: 'history',
	routes
})

export default router;