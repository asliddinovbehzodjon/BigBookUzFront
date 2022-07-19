<template>
<div>

    <footer class="footer-distributed">

        <div class="footer-left">

            <h3>BigBook</h3>

            <p class="footer-links"> 
                <router-link to="/">Asosiy sahifa</router-link>

                <router-link to="/news">Yangiliklar</router-link>

                <router-link to="/upload">Kitob yuklash</router-link>
            </p>

            <p class="footer-company-name">BigBook © 2022</p>
        </div>

        <div class="footer-center">

           

            <div>
                <i class="fa-solid fa-phone-flip"></i>
                <p> +998991160434</p>
            </div>

            <div>
                <i class="fa-solid fa-envelope"></i> 
                <p class="test"><a href="mailto:behzodtuit@gmail.com"> behzodtuit@gmail.com</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>Biz haqimizda</span>
               Kitobxonlarga kitob ulashish va ularni bilim salohiyatini o'sishiga yordam berish!
            </p>

            <div class="footer-icons">

                <a href=""><i class="fa-brands fa-facebook"></i></a>
                
               
                <a href="#"><i class="fa-brands fa-telegram"></i></a>

            </div>

        </div>

    </footer>
</div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

* {
    font-family: Open Sans;
}

.test a{
    color: #ffffff;

}

.footer-distributed {
    background: hsl(153deg, 53%, 53%);;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
   
  
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
    color: #fff;
    display: inline-block;
    vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
    width: 40%;
}

/* The company logo */

.footer-distributed h3 {
    color: #ffffff;
    font: normal 36px 'Open Sans', cursive;
    margin: 0;
}

.footer-distributed h3 span {
    color: lightseagreen;
}

/* Footer links */

.footer-distributed .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
    padding: 0;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    color: lightseagreen;
    text-decoration: none;
    ;
}

.footer-distributed .footer-links a:before {
    content: "";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
    content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
    width: 20%;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

    .footer-distributed {
        font: bold 14px sans-serif;
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }

    .footer-distributed .footer-center i {
        margin-left: 0;
    }

}
</style>
