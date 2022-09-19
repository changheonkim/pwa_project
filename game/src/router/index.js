import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import('../components/MenuPage.vue'),
	},
	{
		path: '/godong',
		name: 'godong',
		component: () => import('../components/GodongPage.vue'),
	},

	{
		path: '/list',
		name: 'list',
		component: () => import('../components/common/MenuList.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
