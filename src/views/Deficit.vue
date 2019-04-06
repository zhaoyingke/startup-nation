<template>
  <div class="game">
    <header-illustration title="Vous êtes en déficit" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Attention ! Vous
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="() => $router.go(-1)">J'ai compris</button>
      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'deficit',
  components: {
    Gauges,
    HeaderIllustration
  },
  data () {
    return {
      typeItDone: false
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .text {
    margin-top: 0px;
  }

  .box {
    border: 4px solid #245e85;
    padding: 24px;
  }

  button + button {
    margin-left: 5px;
  }
</style>
