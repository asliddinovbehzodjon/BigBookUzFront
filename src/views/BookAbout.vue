<template>
<div class="container mt-3">
    <div class="columns">
        <div class="column is-6">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="book.image" alt="Kitob rasmi">
                    </figure>
                </div>
            </div>
        </div>
        <div class="column is-6">
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
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    name: 'BookAbout',
    data() {
        return {
            id: this.$route.params.id,
            url: 'https://bigbookuz.pythonanywhere.com/api/v1/books/',
            book: '',
        }
    },
    mounted() {
        this.getbook()
    },
    methods: {
        async getbook() {
            await axios.get(`${this.url}${this.id}/view/`)
            await axios.get(`${this.url}${this.id}`).then(response => {
                this.book = response.data
            })
        },
        formatDate(date) {
            return moment(date).format('DD-MM-YYYY');
        },
    }

}
</script>

<style lang="scss" scoped>

</style>
