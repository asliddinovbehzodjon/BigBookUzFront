<template>
    <div class="container mt-3">
<h1 class="has-text-centered title" style="color:green">{{genre}} janriga mansub kitoblar</h1>
<div class="columns is-multiline ">


<div class="column is-4 " v-for="book in books" :key="book.id">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="book.image"    alt="Kitob rasmi">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="book.image" alt="Kitob rasmi">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{book.name}}</p>
        <p class="subtitle is-6">{{book.author}}</p>
      </div>
    </div>

    <div class="content">
    <p> {{book.description}}</p>
    <p>Kitob janrlari</p>
      <br>
      <time datetime="2016-1-1" >{{formatDate(book.uploaded_at)}}</time>
    </div>
  </div>


 <footer class="card-footer">
    <a :href="book.file" class="card-footer-item" @click="adddownloadcounter(book.url)"  target="_blank" download ><i class="fa fa-download" ></i>{{book.downloaded}}</a>
    <a href="#" class="card-footer-item"><i class="fa fa-eye" ></i> {{book.viewed}}</a>
    <a href="#" class="card-footer-item"><i class="fas fa-share"></i>{{book.shared}}</a>
  </footer></div>
</div>




</div>
</div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'
    export default {
        name:'Genres',
        data(){
            return {
                id: this.$route.params.id,
                books:[],
                genre:'',
            }
        },
         mounted(){
            this.getgenrebooks(),
            this.getgenrename()
        },
        
        methods:{
            getgenrebooks(){
                axios.get(`/genres/${this.id}/`).then(res =>
                    this.books = res.data.books
                )
            },
            getgenrename(){
                axios.get(`/genres/${this.id}/`).then(res =>
                    this.genre = res.data.name
                )
            },
             formatDate(date) {
                      return moment(date).format('DD-MM-YYYY');
                 },
        },
       
    }
</script>

<style lang="scss" scoped>

</style>