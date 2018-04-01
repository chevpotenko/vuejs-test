<template>
    <nav class="main-menu">
        <ul class="main-menu-list">
            <li class="main-menu-item">
                <router-link to="/introduction" exact>Introduction</router-link>
            </li>
            <li class="main-menu-item">              
                <router-link to="/newslist" exact>News</router-link>
            </li>
            <li class="main-menu-item">               
                <router-link to="/transition" exact>My transition</router-link>
            </li>
            <li class="main-menu-item">               
                <router-link to="/newsadd" exact>News add</router-link>
            </li>
            <li class="main-menu-item">               
                <router-link to="/calendar" exact>Calendar</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {    
    
    }
</script>

<style>
    .main-menu{
        text-align: center;    
    }
    .main-menu-item {
        display: inline-block;       
        border-radius: 15px;
        margin: 0 10px;
        background-color: #eee;
    }
    .main-menu-item a {
        display: inline-block;        
        padding: 10px;
        color: #42b983;
        text-decoration: none;
    }
    .main-menu-item a:hover,
    .router-link-exact-active {
        color: red;
    }
</style>
