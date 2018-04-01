import newsList from './components/news-list.vue';
import myTransition from './components/myTransition.vue';
import myNews from './components/news.vue';
import introduction from './components/introduction.vue';
import newsAdd from './components/news-add.vue';
import calendar from './components/calendar.vue';

export default [
	{
		name: 'init',
		path: '/',
		component: introduction
	},
	{
		name: 'introduction',
		path: '/introduction',
		component: introduction
	},
	{
		name: 'newsList',
		path: '/newslist',
		component: newsList
	},
	{
		name: 'transition',
		path: '/transition',
		component: myTransition
	},
	{
		name: 'news',
		path: '/news/:id',
		component: myNews
	},
	{
		name: 'newsAdd',
		path: '/newsadd',
		component: newsAdd
	},
	{
		name: 'calendar',
		path: '/calendar',
		component: calendar
	}
]
