<template>
  <header>
    <h2 v-if="title">{{ title }}</h2>
    <img
      v-if="illustration"
      :src="require(`../assets/img/${illustration}`)"
      class="illustration">
  </header>
</template>
<script>
export default {
  name: 'HeaderIllustration',
  props: {
    title: {
      type: String,
      default: null
    },
    illustration: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    h2 {
      font-size: 45px;
      color: white;
      text-shadow: 2px 3px 0px #C91432;
      line-height: 48px;
    }
    .illustration {
      width: 100%;
      max-width: 500px;
      margin-bottom: -10px;
    }
  }
</style>
