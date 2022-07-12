<template>
    <div>
      <footer class="footer ">
  <div class="columns">
  <div class="column is-3 is-offset-3">
  <h1 class="is-uppercase">Ijtimoiy tarmoqlar</h1>
  <ul>
  <a href=""  style="font-size:18px;color:blue"><i class="fab fa-telegram"  aria-hidden="true"></i> Telegram</a><br>
  <a href=""  style="font-size:18px;color:red;"><i class="fab fa-instagram" aria-hidden="true"></i> Instagram</a><br>
  <a href=""  style="font-size:18px;color:blue"><i class="fab fa-facebook" aria-hidden="true"></i> Facebook</a><br>

  </ul>
  </div>
  <div class="column is-6 is-offset-3">
  <h1 class="is-uppercase">Menu</h1>
  <ul>
    <li>
        <router-link to="/">Asosiy sahifa</router-link><br>
        <router-link to="/news">Blog| Yangiliklar</router-link><br>
      
    </li>
  </ul>
  </div>
   
  </div>
  <h1 class="has-text-centered">Barcha huquqlar himoyalangan.Saytdagi malumotlardan foydalanganda sayt manzili ko'rsatilishi shart ©bigbook.uz 2022</h1>
</footer>
    </div>
</template>

<script>
    export default {
        name:'App',
    }
</script>

<style lang="scss" scoped>
$footer-background-color: hsl(141, 53%, 53%);
$footer-color: false;
$footer-padding: 3rem 1.5rem 3rem;

.footer{
   background-color: $footer-background-color ;
   color: $footer-color;
   padding: $footer-padding;
  
  
  
}
a{
    text-decoration: none;
}

</style>