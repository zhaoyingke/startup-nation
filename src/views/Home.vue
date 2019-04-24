<template>
  <div class="home">
    <img alt="Startup logo" src="../assets/logo.png">
    <img alt="bonhomme" src="../assets/img/idea-man-image.png">
    <p v-typeit>Serez-vous la prochaine licorne française ?</p>
    <router-link
      tag="button"
      to="game">
      Je fonce
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
 img {
   width: 100%;
 }
</style>
