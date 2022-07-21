<template>
<div class="container mt-3">
    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
        <div class="lds-dual-ring"></div>
    </div>

    <div class="columns">
        <div class="column is-4 is-offset-4">

            <form @submit.prevent="SubmitForm" class="mt-3">
                <div class="field">
                    <label class="label has-text-centered">Kitob nomini kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob nomini kiriting" v-model="name" required>
                    </div>
                    <p class="help">Kitob nomini kiriting(majburiy)</p>
                </div>
                <div class="field">
                    <label class="label has-text-centered">Kitob muallifini kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob muallifini kiriting" v-model="author" required>
                    </div>
                    <p class="help">Kitob muallifini kiriting(majburiy)</p>
                </div>
                <div class="field">
                    <label class="label has-text-centered">Kitob haqida qisqacha kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob haqida qisqacha kiriting" v-model="description" required>
                    </div>
                    <p class="help">Kitob haqida qisqacha kiriting(majburiy)</p>
                </div>
                <div class="field mb-3">
                    <p class="control has-icons-left">
                        <span class="select">
                            <select v-model="category" required>
                                <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
                            </select>
                        </span>
                        <span class="icon is-small is-left">
                            <i class="fas fa-book"></i>
                        </span>
                    </p>

                    <p class="help">Kitob janrini kiriting</p>
                </div>
                <div class="field mt-3">
                    <div class="control file has-name">
                        <label class="file-label">
                            <input class="file-input" @change="uploadFile" ref="image" type="file" name="resume" required>
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Kitob rasmini yuklang.
                                </span>
                            </span>
                            <span class="file-name">
                                BigBook.png
                            </span>
                        </label>
                    </div>
                      <p class="help">Kitob rasmini kiriting(majburiy)</p>
                </div>
                <div class="field mt-3">
                    <div class="control file has-name">
                        <label class="file-label">
                            <input class="file-input" @change="uploadAudio" ref="audio" type="file" name="resume" required>
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Kitobning audio variantini yuklang.
                                </span>
                            </span>
                            <span class="file-name">
                                BigBook.mp3
                            </span>
                        </label>
                    </div>
                      <p class="help">Kitobning audio variantini kiriting(majburiy emas)</p>
                </div>
                <div class="field mt-3">
                    <div class="control file has-name">
                        <label class="file-label">
                            <input class="file-input" @change="Fileupload" ref="file" type="file" name="resume" required>
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Kitob faylini yuklang.
                                </span>
                            </span>
                            <span class="file-name">
                                BigBook.pdf
                            </span>
                        </label>
                    </div>
                    <p class="help">Kitob faylini kiriting:doc.docx.pdf(majburiy)</p>
                </div>
                <div class="notification is-danger" v-if="errors.length">
                    <p v-for="error in errors" :key="error">{{error}}</p>
                </div>
                <div class="field">

                    <div class="control has-text-centered">
                        <button class="button is-success">Yuklash</button>
                    </div>

                </div>

            </form>

        </div>

    </div>

</div>
</template>

<script>
import axios from 'axios'
import {
    toast
} from 'bulma-toast'
export default {
    name: 'Upload',
    data() {
        return {
            genres: [],
            url: 'https://bigbookuz.pythonanywhere.com/api/v1',
            name: '',
            errors: [],
            author: '',
            author: '',
            description: '',
            category: null,
            image: null,
            audio:null,
            file: null,


        }
    },
    methods: {
        uploadFile() {
            this.image = this.$refs.image.files[0];
        },
        uploadAudio() {
            this.audio = this.$refs.audio.files[0];
        },
        Fileupload() {
            this.file = this.$refs.file.files[0];
        },
        getgenres() {
            axios.get(`${this.url}/genres/`).then(res => {
                this.genres = res.data.results

            })
        },
        async SubmitForm() {
            this.$store.commit('setLoading', true)
            console.log('Working....')
            this.errors = []
            const formData = new FormData()
            formData.append('image', this.image);
            formData.append('name', this.name);
            formData.append('author', this.author);
            formData.append('description', this.description);
            formData.append('file', this.file);
            formData.append('genre', this.category)
            formData.append('audio',this.audio)
            
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            await axios.post(`${this.$store.state.siteURL}/api/v1/books/`, formData, {
                headers
            }).then(res => {
                toast({
                    message: 'Kitob yuklandi',
                    duration: 2000,
                    pauseOnHover: true,
                    dismissible: true,
                    position: 'bottom-right',
                    type: 'is-success'

                })
                this.$router.go('/')

            }).catch(error => {
                if (error.response) {
                    for (const property in error.response.data) {
                        this.errors.push(`${property} : ${error.response.data[property]}`)

                    }
                } else if (error.message) {
                    this.errors.push('Nimadir xato ketdi')
                }
            })
            this.$store.commit('setLoading', false)
            

        }

    },
    mounted() {
        this.getgenres()
    }

}
</script>

<style lang="scss" scoped>
.button,
input {
    border-radius: 15px;

}

h1 {
    color: #fff;
    font-size: 20px;
}

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.is-loading-bar {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &.is-loading {
        height: 80px;
    }
}
</style>
