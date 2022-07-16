<template>
<div class="container mt-3 ">
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <div class="card">
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
                    <p>Kitob janri: </p>
                    <br>
                    <time datetime="2016-1-1">{{formatDate(book.uploaded_at)}}</time>
                </div>
            </div>
            <footer class="card-footer">
                <a :href="book.file" class="card-footer-item" @click="adddownloadcounter(book.url)" target="_blank" download><i class="fa fa-download"></i>{{book.downloaded}}</a>
                <a href="#" class="card-footer-item"><i class="fa fa-eye"></i> {{book.viewed}}</a>
                <a href="#" class="card-footer-item"><i class="fas fa-share"></i>{{book.shared}}</a>
            </footer>
        </div>
    </div> </div>
    <div class="columns">
    <div class="columnn is-4 ml-10" v-for="book in likebooks" :key="book.id">
      <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="havola+book.image" alt="Kitob rasmi">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{book.name}}</p>
                        <p class="subtitle is-6">{{book.author}}</p>
                    </div>
                </div>

                <div class="content">
                    <p> {{book.description}}</p>
                    <p>Kitob janri: </p>
                    <br>
                    <time datetime="2016-1-1">{{formatDate(book.uploaded_at)}}</time>
                </div>
            </div>
            <footer class="card-footer">
                <a :href="book.file" class="card-footer-item" @click="adddownloadcounter(book.url)" target="_blank" download><i class="fa fa-download"></i>{{book.downloaded}}</a>
                <a href="#" class="card-footer-item"><i class="fa fa-eye"></i> {{book.viewed}}</a>
                <a href="#" class="card-footer-item"><i class="fas fa-share"></i>{{book.shared}}</a>
            </footer>
        </div>
    </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    name: 'BookAbout',
    data() {
        return {
            id: this.$route.params.id,
            ids:'',
            havola:'https://bigbookuz.pythonanywhere.com',
            url: 'https://bigbookuz.pythonanywhere.com/api/v1/books/',
            link:'https://bigbookuz.pythonanywhere.com/api/v1/moregenre/',
            book: '',
            likebooks:''
        }
    },
    mounted() {
        this.getbook()
    },
    methods: {
        async getbook() {
            await axios.get(`${this.url}${this.id}`).then(response => {
                this.book = response.data,
                this.ids=response.data.genre.id
                
            })
            await axios.get(`${this.link}${this.ids}/`).then(res => {
                this.likebooks = res.data.results,
                console.log(this.likebooks)
            }).catch(error =>{
                
            })
            await axios.get(`${this.url}${this.id}/view/`)
            
        },
        formatDate(date) {
            return moment(date).format('DD-MM-YYYY');
        },
    }

}
</script>

<style lang="scss" scoped>

</style>
