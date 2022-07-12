<template>
   <nav class="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
     <h1 > <strong class="is-dark">BigBook</strong></h1>
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" id="burger" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Asosiy sahifa
      </router-link>

      <router-link class="navbar-item" to="/news">
       Blog | Yangiliklar
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a  class="navbar-link">
         Janrlar
        </a>

        <div class="navbar-dropdown" >
          <div v-for="genre in genres" :key="genre.id">
          <router-link    class="navbar-item" :to="{ name: 'Genre' ,params:{id:genre.id}}">
            {{genre.name}}
          </router-link>
          </div>
        
        
        </div>
        
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/upload" class="button is-primary">
            <strong>Kitob yuklash</strong>
          </router-link>
        
         
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import axios from 'axios'

    export default {
        name:'Navbar',
         data: function() {
                return {
                    isOpen: false,
                    genres:[],
                    url:'https://bigbookuz.pythonanywhere.com/api/v1'
                }
            },
        methods:{
          getgenres(){
            axios.get(`${this.url}/genres/`).then(res =>
            this.genres = res.data);

          }
        },
        mounted(){
          this.getgenres()
        },
           watch: {
    '$route' () {
      this.isOpen = false;
    

    
     
    },
   
    
    }


    }
   
</script>

<style lang="scss" scoped>
.button{
  border-radius: 15px;

}
h1{
  color: #fff;
  font-size: 20px;
}
</style>