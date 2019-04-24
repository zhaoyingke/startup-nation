<template>
  <div class="game">
    <header-illustration title="Vous êtes parvenu.e à la fin du jeu"/>
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text"/>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="sharefb">Partager sur Facebook</button>
        <button @click="sharetwitter">Partager sur twitter</button>
        <button @click="sendlink">Envoyer le lien</button>
        <button @click="gobackhome">Retourner à la page d'accueil</button>
      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'fin',
  components: {
    Gauges,
    HeaderIllustration
  },
  data () {
    return {
      typeItDone: false
    }
  },
  computed: {
    header() {illustration: 'scaling-image.png'}
  },
  watch: {},
  methods: {
    nothing () {
      this.$router.go(-1)
      this.$store.commit(addReputationPoints, -10)
      this.$store.commit(addInvestorPoints, -10)
    },
    free () {
      this.$router.go(-1)
      this.$store.commit(addReputationPoints, -8)
      this.$store.commit(addInvestorPoints, -10)
    },
    prime () {
      this.$router.go(-1)
      this.$store.commit(addReputationPoints, -10)
      this.$store.commit(addInvestorPoints, -8)
      this.$store.commit(addMoney, Math.floor(Math.random() * 10) * 8)
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
