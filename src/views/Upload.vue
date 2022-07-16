<template>
<div class="container mt-3">
    <div class="columns">
        <div class="column is-4 is-offset-4">

            <form @submit.prevent="SubmitForm" class="mt-3">
                <div class="field">
                    <label class="label has-text-centered">Kitob nomini kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob nomini kiriting" v-model="name" required>
                    </div>
                    <p class="help">Kitob nomini kiriting</p>
                </div>
                <div class="field">
                    <label class="label has-text-centered">Kitob muallifini kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob muallifini kiriting" v-model="author" required>
                    </div>
                    <p class="help">Kitob muallifini kiriting</p>
                </div>
                <div class="field">
                    <label class="label has-text-centered">Kitob haqida qisqacha kiriting</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Kitob haqida qisqacha kiriting" v-model="description" required>
                    </div>
                    <p class="help">Kitob haqida qisqacha kiriting</p>
                </div>
                <div class="field mb-3">
                    <p class="control has-icons-left">
                        <span class="select">
                            <select v-model="category" required>
                                <option  selected v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
                            </select>
                        </span>
                        <span class="icon is-small is-left">
                            <i class="fas fa-book"></i>
                        </span>
                    </p>

                    <p class="help">Kitob janr(lar)ini kiriting</p>
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
                </div>
                <div class="field">
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
import {toast} from 'bulma-toast'
export default {
    name: 'Upload',
    data() {
        return {
            genres: [],
            url: 'https://bigbookuz.pythonanywhere.com/api/v1',
            name: '',
            author: '',
            author: '',
            description: '',
            category: null,
            image: null,
            file: null,

        }
    },
    methods: {
        uploadFile() {
            this.image = this.$refs.image.files[0];
        },
        Fileupload() {
            this.file = this.$refs.file.files[0];
        },
        getgenres() {
            axios.get(`${this.url}/genres/`).then(res =>
               { this.genres = res.data.results,
                 console.log(this.genres)
               })
        },
        SubmitForm() {
            const formData = new FormData();
            formData.append('image', this.image);
            formData.append('name', this.name);
            formData.append('author', this.author);
            formData.append('description', this.description);
            formData.append('file', this.file);
            formData.append('genre',this.category)
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            axios.post('https://bigbookuz.pythonanywhere.com/api/v1/books/', formData, {
                headers
            }).then((res) => {
                toast({
                    message:'Kitob yuklandi',
                    duration:2000,
                    pauseOnHover:true,
                    dismissible:true,
                    position:'bottom-right',
                    type:'is-success'

                })
                this.$router.go('/')

            });

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
</style>
