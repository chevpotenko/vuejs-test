<template>
   <div class="news-add">
       <h3>Add news</h3>
       <form action="">
            <div>
                <label for="title">Title</label><br><br>
                <input v-model.lazy="news.title" id="title" name="title"  type="text" placeholder="Title"><br><br>
            </div>
            <div>
                <label for="content">Content</label><br><br>
                <textarea v-model.lazy="news.body" name="content" id="content" cols="30" rows="10"></textarea><br><br>
            </div>
            <div>
                <button v-on:click.prevent="setNews">Submit</button>
            </div>
       </form>
   </div>
</template>

<script>
    export default {
        name: 'news-add',
        data(){
            return {
                news: {
                    title: '',
                    body: ''
                }
            }
        },
        methods:{ 
            setNews: function(){
                this.$http.post('https://news-playlist.firebaseio.com/news.json', this.news).then(function(data) {
                    console.log(data);
                },function(error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style>
    label,
    input[type="submit"]{
            cursor: pointer;
    }
</style>
