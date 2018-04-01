<template>
	<div id="app">    
		<!-- <news-list v-bind:list='list' v-bind:listEmpty='!list.length'></news-list> -->
		<!-- <products-list-one></products-list-one> -->
		<!-- <my-transition></my-transition> -->
		<my-header></my-header>
		<router-view v-bind="routerProps"></router-view> 
	</div>
</template>

<script>
	import NewsList from "./components/news-list.vue";
	import productsListOne from "./components/productsListOne.vue";
	import myTransition from "./components/myTransition.vue";
	import header from "./components/header.vue";	
	import { bus } from "./main.js";

	export default {
		name: "app",
		components: {
			"news-list": NewsList,
			"products-list-one": productsListOne,
			"my-transition": myTransition,
			"my-header": header
		},
		data() {
			return {
				list: []
			};
		},
		created() {
			console.log(!this.list.length);
			this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
				response => {
					this.list = response.body.slice(1, 5);
					//bus.$emit('loadedNews', this.news);
				},
				response => {
					// error callback
				}
			);
		},
		computed: {
			routerProps: function() {
				if (this.$route.name === "newsList") {
					return {
						list: this.list,
						emptyList: !this.list.length
					};
				}
			}
		},
		mounted() {}
	};
</script>

<style lang="scss">
	#app {
		max-width: 600px;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 20px auto 0;
	}
	body{
        font-size: 16px;
    }   
	h1 {
        font-size: 25px;
    }
    h2 {
        font-size: 18px;
    }
    h1, h2 {
        font-weight: normal;
    }
	h3{
		text-align-last: left;
	}
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
