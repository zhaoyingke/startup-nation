<template>
  <div class="home">
    <img alt="Startup logo" src="../assets/logo.png">
    <p>Bienvenue dans la Startup Nation ! Êtes-vous la prochaine licorne française ?</p>
    <router-link
      tag="button"
      to="game">
      Je fonçe
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
