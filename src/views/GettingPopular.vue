<template>
  <div class="game">
    <header-illustration title="On pète le feu !"/>
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        On est en 🔥 ! Tout le monde parle de votre startup. Quoi faire de toutes ces nouvelles opportunités?
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="nothing">Rien, je suis satisfait de ma situation</button>
        <button @click="party">J'orgnise une soirée en fin de journée pour fêter avec mon équipe </button>
        <button @click="press_conf">J'invite des journalistes pour leur parler de notre réussite</button>
        <button @click="bragging">je me vante à tous les évènements</button>

      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'reputation',
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
       this.$store.commit('addReputationPoints', -16)
       this.$router.go(-1) 
    },  
    party () {
      this.$store.commit('addReputationPoints', -15)
      this.$store.commit('multiplyMoneyBy', .99)
      this.$router.go(-1)
    },
    press_conf () {
      this.$store.commit('addReputationPoints', -15)
      this.$router.go(-1) 
    },
    bragging () {
      this.$store.commit('addReputationPoints', -25)
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
