<template v-if="listEmpty">
	<div class="news-list">
		<h3>{{title}}</h3>
		<ul>
			<li v-for="(item, index) in list" class="news-item" :key="index">
				<div v-rainbow="'blue'" class="news-title">
					<router-link v-bind:to="{ name: 'news', params: { id: item.id }}">
						{{ item.title|toUppercase }}
					</router-link>
				</div>			
				<div class="news-text">{{item.body}}</div>                
			</li>
		</ul>
	</div>
</template>

<script>
	import { bus } from "../main.js";
	import mixin from "../mixins/mixin";

	export default {
		name: "news-list",
		props: ["listEmpty", "list"],
		mixins: [mixin],
		data() {
			return {
				title: "News list"
			};
		},
		computed: {
			data: function() {}
		},
		mounted() {
			this.log('mixins');
		}
	};
</script>

<style>
	.news-list {
		text-align: left;
	}
	.news-item {
		display: block;
		margin: 0 0 20px 0;
	}
	.news-item a{
		text-decoration: none;
		color: blue;
	}
	.news-item a:hover{
		text-decoration: underline;
	}
	.news-title {
		padding: 10px;
		background: #eee;
		margin-bottom: 10px;
	}
</style>
