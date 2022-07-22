<template>
  
 <Loading v-if="loading"></Loading>
  <div v-if="!loading">
  <Navbar />
   
  <div class="section">
  <router-view :key="$route.fullPath" />
  </div>
  <Footer />
  </div>
  
</template>

<style lang="scss">

@import '../node_modules/bulma';

</style>
<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Loading from '@/components/Loading.vue'

export default {
  name:'App',
  components:{
    Navbar,
    Footer,
    Loading,
    Loading
},
data(){
  return {
    loading:true
  }
},
mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
</script>
