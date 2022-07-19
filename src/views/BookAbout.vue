<template>
<div class="container mt-3">
    <div class="columns mt--3">
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
                        <p class="title is-4"> {{book.description}}</p>
                        <p>Kitob janri : {{janr}}</p>
                        <p>Kitob hajmi: {{book.filesize}} </p>
                        <a :href="book.audio" target="_blank" v-if="book.audio" download>Kitobning audio varianti</a><br>

                        <time datetime="2016-1-1">Kitob yuklangan sana: {{formatDate(book.uploaded_at)}}</time>
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
<div class="container mt-3">
    <h1 class="has-text-centered title" style="color:green">Shu janrga oid boshqa kitoblar</h1>
    <div class="columns is-multiline ">

        <div class="column is-4 " v-for="book in likebooks" :key="book.id">
            <div class="card">
                <!-- <router-link class="card-image" :to="{ name:'BookAbout' ,params:{ id: book.id}}">
                        <figure class="image is-4by3">
                            <img :src="link+book.image" alt="Kitob rasmi">
                        </figure>
                    </router-link> -->
                <div class="card-content">
                    <router-link class="media" :to="{name:'BookAbout',params:{id:book.id}}">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="havola+book.image" alt="Kitob rasmi">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{book.name}}</p>
                            <p class="subtitle is-6">{{book.author}}</p>
                        </div>
                    </router-link>

                    <div class="content">
                        <p> {{book.description}}</p>

                        <p>Kitob hajmi: {{book.filesize}} </p>
                        <a :href="havola+book.audio" target="_blank" v-if="book.audio" download>Kitobning audio varianti</a><br>

                        <time datetime="2016-1-1">Kitob yuklangan sana: {{formatDate(book.uploaded_at)}}</time>
                    </div>
                </div>

                <footer class="card-footer">
                    <a :href="havola+book.file" class="card-footer-item" @click="adddownloadcounter(book.url)" target="_blank" download><i class="fa fa-download"></i>{{book.downloaded}}</a>
                    <a href="#" class="card-footer-item"><i class="fa fa-eye"></i> {{book.viewed}}</a>
                    <a href="#" class="card-footer-item"><i class="fas fa-share"></i>{{book.shared}}</a>
                </footer>
            </div>
        </div>

    </div>

</div>
<!-- Pagination -->
<div class="center mt-3">
    <div class="pagination">
        <a @click="moreprevious()">Orqaga</a>
        <a v-if="current_page_num">{{current_page_num}} ta {{all_pages}} dan</a>
        <a v-else>0 ta 0 dan</a>
        <a @click="morenext()">Oldinga</a>
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
            genre_id: '',
            havola: this.$store.state.siteURL,
            url: `${this.$store.state.siteURL}/api/v1/books/`,
            genreurl: `${this.$store.state.siteURL}/api/v1/genres/`,
            link: `${this.$store.state.siteURL}/api/v1/moregenre/`,
            book: '',
            likebooks: '',
            janr: '',
            next: '',
            previous: '',
            count: '',
            all_pages: '',
            current_page_num: '',
        }
    },
    mounted() {
        this.getbook()
    },
    methods: {
        async moreprevious() {
            if (this.previous) {
                await axios.get(this.previous).then(res => {
                    this.likebooks = res.data.results,
                        this.count = res.data.count,
                        this.next = res.data.next,
                        this.previous = res.data.previous,
                        this.all_pages = res.data.all_pages,
                        this.current_page_num = res.data.current_page_num
                })
            } else {
                this.getbook()
            }
        },
        async morenext() {
            if (this.next) {
                await axios.get(this.next).then(res => {
                    this.likebooks = res.data.results,
                        this.count = res.data.count,
                        this.next = res.data.next,
                        this.previous = res.data.previous,
                        this.all_pages = res.data.all_pages,
                        this.current_page_num = res.data.current_page_num
                })
            } else {

            }
        },

        async getbook() {
            await axios.get(`${this.url}${this.id}`).then(response => {
                this.book = response.data,
                    this.genre_id = response.data.genre

            })
            await axios.get(`${this.genreurl}${this.genre_id}`).then(res => {
                this.janr = res.data.name
            })
            await axios.get(`${this.link}${this.genre_id}/${this.id}/`).then(res => {
                this.likebooks = res.data.results,
                    this.count = res.data.count,
                    this.next = res.data.next,
                    this.previous = res.data.previous,
                    this.all_pages = res.data.all_pages,
                    this.current_page_num = res.data.current_page_num
            }).catch(error => {

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
input {
    border-radius: 15px;
    height: 50px;
}

button {
    border-radius: 15px;
    height: 50px;
}

.center {
    text-align: center;
}

.pagination {
    display: inline-block;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
}

.pagination a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
    background-color: #ddd;
}

a {
    border-radius: 10px;
}
</style>
