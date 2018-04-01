<template>
   <div class="news">
       <h2>News</h2>       
       <p>{{news.title}}</p>
       <p>{{news.body}}</p>
   </div>
</template>

<script>
    export default {
        name: 'news',
        data(){
            return{
                id: this.$route.params.id,
                news:{}
            }
        },   
        created(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then( function (data){  
                this.news = data.body;
            });
        }
    }
</script>

<style>    

</style>
