<template>
   <div class="introduction">
        <img class="logo" src="../assets/logo.png">
        <h1>{{ title }}</h1>
        <div class="links-block">
            <div>
                <h2>Essential Links</h2>
                <ul class="menu-vue">
                    <li class="menu-vue-item"><a href="https://ru.vuejs.org/v2/guide/" target="_blank">Core Docs</a></li>
                    <li class="menu-vue-item"><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
                    <li class="menu-vue-item"><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
                    <li class="menu-vue-item"><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
                </ul>
            </div>
            <div>
                <h2>Ecosystem</h2>
                <ul class="menu-vue">
                    <li class="menu-vue-item"><a href="https://router.vuejs.org/ru/" target="_blank">vue-router</a></li>
                    <li class="menu-vue-item"><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                    <li class="menu-vue-item"><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                    <li class="menu-vue-item"><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
                </ul>
            </div>
        </div>      
   </div>
</template>

<script>
    export default {
        name: "introduction",
        data() {
            return {
                title: "Welcome to Your Vue.js App"
            };
        }
    };
</script>

<style>
    .introduction{
        text-align: center;
    }    
    .menu-vue-item {
        display: inline-block;   
        padding-right: 10px;
    }
    .menu-vue-item a {
        color: #42b983;
    }
	.logo {
		width: 100px;
		height: 100px;
	}
</style>
