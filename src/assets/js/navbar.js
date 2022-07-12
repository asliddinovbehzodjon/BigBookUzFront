const burger = document.querySelector("#burger")
const nav_links = document.querySelector('#navbarBasicExample')
burger.addEventListener('click',() =>{
  nav_links.classList.toggle('is-active')
})