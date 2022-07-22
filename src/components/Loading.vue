<template>
<div id="loader">
    <img
      class="img"
      src="../assets/loading.gif"
      alt="loading..."
      width="200"
    />
</div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped>
#loading {
  position: relative;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

}
</style>
