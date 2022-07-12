<template>
    <div class="container mt-5">
    <div class="columns">
   
    <div class="column is-4 is-offset-4">
     <div class="has-text-centered"> <h1 class=" title">Ro'yxatdan o'tish</h1></div>
       <form @submit.prevent="SubmitForm" class="mt-2">
        <div class="field">
                <label class="label has-text-centered">Ismingizni kiriting</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Ismingizni kiriting">
                </div>
                <p class="help">Ismingizni kiriting</p>
        </div>
        <div class="field">
                <label class="label has-text-centered">Username kiriting</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Username kiriting">
                </div>
                <p class="help">Username kiriting</p>
        </div>
        <div class="field">
                <label class="label has-text-centered">Parol kiriting</label>
                <div class="control">
                    <input class="input" type="password" placeholder="******">
                </div>
                <p class="help">Parol kiriting</p>
        </div>
        <div class="field">
                <label class="label has-text-centered">Parolni tasdiqlang</label>
                <div class="control">
                    <input class="input" type="password" placeholder="******">
                </div>
                <p class="help">Parolni tasdiqlang</p>
        </div>
        <div class="field">
               
                <div class="control has-text-centered">
                    <button class="button is-success">Tasdiqlash</button>
                </div>
               
        </div>
        

       
       
       
       </form>

    </div>
    </div>
    
    </div>
</template>

<script>
    export default {
        name:'Signup'
    }
</script>

<style lang="scss" scoped>
input{
    border-radius: 15px;
}
</style>