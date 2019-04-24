<template>
  <div class="game">
    <header-illustration title="Vous êtes presque en déficit" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Attention ! Vous avez moins de 100 pieces d'or ! Même si le déficit ne tue pas l'entreprise, faites attention tout de même !
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="click">J'ai compris</button>
      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'almost_bankrupted',
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
  methods: {
    click () {
        this.$router.go(-1)
    }
  }
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
</style>
