<template>
  <div class="game">
    <header-illustration title="Participez à un concours startup !" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Félicitations ! Vous êtes sélectionné.e pour participer à un concours des startups...
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="free">J'y participe pour être logé dans un incubateur</button>
        <button @click="prime">J'y participe à un concours pour gagner de l'argent pour ma startup</button>
        <button @click="nothing">Non, je veux garder mon indépendance</button>
      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'concours',
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
    nothing () {
      this.$router.go(-1)
      this.$store.commit('addReputationPoints', -10)
      this.$store.commit('addInvestorPoints', -10)
    },
    free () {
      this.$router.go(-1)
      this.$store.commit('addReputationPoints', -8)
      this.$store.commit('addInvestorPoints', -10)
    },
    prime () {
      this.$router.go(-1)
      this.$store.commit('addReputationPoints', -10)
      this.$store.commit('addInvestorPoints', -8)
      this.$store.commit('addMoney', Math.floor(Math.random() * 10) * 8)
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
