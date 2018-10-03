<template>
    <div class="my-transition">
        <h3>My transition</h3>
        <button v-on:click='show = !show'>Show content</button>
        <transition
            name='flipInX'
            enter-active-class='animated flipInX faster'>
                 <p class="transition-p" v-if="show">content</p>
        </transition>                
    </div>
</template>

<script>
    import { bus } from '../main.js';
    export default {    
        name: 'my-transition',
        data() {
            return {
                title: 'News',
                show: false
            }
        },
        mounted() {
            this.show = true;
        },
        destroyed() {
            this.show = false;
        }
    }
</script>

<style>
    .my-transition{
        font-size: 16px;
    }
    .my-transition h2{
        font-size: 1.5em; 
        text-align: left;
    }   
    .transition-p {
        font-size: 1em;
        height: 3em;
        border-left: 2px solid red;
        padding-left: 20px;
        text-align: left;
        background: cadetblue;
    }    
</style>
