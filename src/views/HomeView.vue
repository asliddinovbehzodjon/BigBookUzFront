<template>
<div>
    <div class="container">
        <form @submit.prevent="searchBook">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="field has-text-centered mt-5">

                        <div class="control">
                            <input class="input has-text-centered" type="text" placeholder="Kitob qidirish uchun so'z kiriting 🔎" v-model="key">

                        </div>
                    </div>

                </div>
                <div class="column is-2 ">
                    <div class="field has-text-centered mt-5">

                        <div class="control">
                            <button class="button is-primary">Qidirish</button>
                        </div>
                    </div>

                </div>

            </div>
        </form>
    </div>

    <!-- Searched books -->
    <div class="container mt-3" v-if="searchbooks.length">
        <h1 class="has-text-centered title" style="color:green">Qidirilgan kitoblar</h1>
        <div class="columns is-multiline ">

            <div class="column is-4 " v-for="book in searchbooks" :key="book.id">
                <div class="card">
                    <router-link class="card-image" :to="{ name:'BookAbout' ,params:{ id: book.id}}">
                        <figure class="image is-4by3">
                            <img :src="link+book.image" alt="Kitob rasmi">
                        </figure>
                    </router-link>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="link+book.image" alt="Kitob rasmi">
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
        <div class="center mt-3">
            <div class="pagination">
                <a @click="searchprevious()">Orqaga</a>
                <a>{{searchcurrent_page_num}} ta {{searchall_pages}} dan</a>
                <a @click="searchnext()">Oldinga</a>
            </div>
        </div>
    </div>

    <!-- Ended Searched books -->
    <!-- Search -->

    <div class="container mt-3">
        <h1 class="has-text-centered title" style="color:green">Ko'p yuklangan kitoblar({{count}})</h1>
        <div class="columns is-multiline ">

            <div class="column is-4 " v-for="book in books" :key="book.id">
                <div class="card">
                    <router-link class="card-image" :to="{ name:'BookAbout' ,params:{ id: book.id}}">
                        <figure class="image is-4by3">
                            <img :src="link+book.image" alt="Kitob rasmi">
                        </figure>
                    </router-link>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="link+book.image" alt="Kitob rasmi">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{book.name}}</p>
                                <p class="subtitle is-6">{{book.author}}</p>
                            </div>
                        </div>

                        <div class="content">
                            <p> {{book.description}}</p>
                            <p>Kitob janri: {{book.genre}}</p>
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
    <!-- Pagination -->
    <div class="center mt-3">
        <div class="pagination">
            <a @click="moreprevious()">Orqaga</a>
            <a>{{current_page_num}} ta {{all_pages}} dan</a>
            <a @click="morenext()">Oldinga</a>
        </div>
    </div>
    <!-- Favorite -->

</div>
</template>

<style scoped>
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

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import moment from 'moment'
export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data() {
        return {
            books: [],
            key: '',
            searchbooks: [],
            link: 'https://bigbookuz.pythonanywhere.com',
            url: 'https://bigbookuz.pythonanywhere.com/api/v1',
            next: '',
            previous: '',
            count: '',
            all_pages: '',
            current_page_num: '',
            searchnext: '',
            searchprevious: '',
            searchcount: '',
            searchall_pages: '',
            searchcurrent_page_num: ''
        }
    },

    methods: {
        moreprevious() {
            if (this.previous) {
                axios.get(this.previous).then(res => {
                    this.books = res.data.results,
                        this.count = res.data.count,
                        this.next = res.data.next,
                        this.previous = res.data.previous,
                        this.all_pages = res.data.all_pages,
                        this.current_page_num = res.data.current_page_num
                })
            } else {
                this.getmorebooks()
            }
        },
        searchprevious() {
            if (this.searchprevious) {
                axios.get(this.previous).then(res => {
                    this.searchbooks = res.data.results,
                        this.searchcount = res.data.count,
                        this.searchnext = res.data.next,
                        this.searchprevious = res.data.previous,
                        this.searchall_pages = res.data.all_pages,
                        this.searchcurrent_page_num = res.data.current_page_num
                })
            } else {
                this.searchBook()
            }
        },
        morenext() {
            if (this.searchnext) {
                axios.get(this.searchnext).then(res => {
                    this.searchbooks = res.data.results,
                        this.searchcount = res.data.count,
                        this.searchnext = res.data.next,
                        this.searchprevious = res.data.previous,
                        this.searchall_pages = res.data.all_pages,
                        this.searchcurrent_page_num = res.data.current_page_num
                })
            } else {

            }
        },
        morenext() {
            if (this.next) {
                axios.get(this.next).then(res => {
                    this.books = res.data.results,
                        this.count = res.data.count,
                        this.next = res.data.next,
                        this.previous = res.data.previous,
                        this.all_pages = res.data.all_pages,
                        this.current_page_num = res.data.current_page_num
                })
            } else {

            }
        },
        searchBook() {

            axios.get(`${this.url}/search/${this.key}/`).then((res) => {
                    this.searchbooks = res.data.results,
                        this.searchcount = res.data.count,
                        this.searchnext = res.data.next,
                        this.searchprevious = res.data.previous,
                        this.searchall_pages = res.data.all_pages,
                        this.searchcurrent_page_num = res.data.current_page_num

                }

            )

        },

        formatDate(date) {
            return moment(date).format('DD-MM-YYYY');
        },
        adddownloadcounter(url) {
            axios.get(`${this.url}download/`).then(
                this.getmorebooks()
            )

        },
        getmorebooks() {

            const data = axios.get(`${this.url}/more`).then((res) => {
                this.books = res.data.results,
                    this.count = res.data.count,
                    this.next = res.data.next,
                    this.previous = res.data.previous,
                    this.all_pages = res.data.all_pages,
                    this.current_page_num = res.data.current_page_num

            })

        }
    },
    mounted() {
        this.getmorebooks();
    }
}
</script>
