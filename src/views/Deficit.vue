<template>
  <div class="game">
    <header-illustration title="Vous êtes en déficit" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Vous êtes en déficit, ne paniquez pas ! Les pertes temporaires arrivent souvent aux startups, même les plus connues. Ce coût pour révolutionner le marché est tout à fait acceptable et normal aux yeux des investisseurs, tant que vous ne perdez pas le potentiel de croissance. Prenez Uber comme exemple. L'entreprise a généré une perte nette de 865 millions dollars au quatrième trimestre de 2018, soit environ 20% de moins par rapport au trimestre passé. Ce qui a inquiété le marché, pourtant, c'est que la licorne californienne a connu un taux de réservation est en chute depuis plus d'un an... Pourrez-vous faire mieux qu'eux ?
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="nothing">J'ai compris, et l'entreprise va survivre ce moment de difficulté</button>
        <button @click="banklending">Je prends un prêt bancaire</button>
        <button @click="family">Je m'adresse à mes proches</button>
        <button @click="saving">J'ai des épargnes, heureusement</button>
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
  methods: {
    nothing () {
      this.$router.go(-1)
      this.$store.commit('multipleMoneyBy', Math.floor(Math.random() * 10) / -100)
      this.$store.commit('addInvestorPoints', -3)
    },
    banklending () {
      this.$router.go(-1)
      if (this.$store.state.difficulty === 'easy') {
        this.$store.commit('addMoney', 100)
        this.$store.commit('addInvestorPoints', -7)
      }
      if (this.$store.state.difficulty === 'hard') {
        this.$store.commit('addMoney', 40)
        this.$store.comit('addInvestorPoints', -10)
        // comment ajouter un popup ici pour activer le modal.vue?
      }
    },
    family () {
      this.$router.go(-1)
      if (this.$store.state.difficulty === 'easy') {
        this.$store.commit('addMoney', 80)
        this.$store.commit('addReputationPoints', -5)
      }
      if (this.$store.state.difficulty === 'hard') {
        this.$store.commit('addMoney', 40)
        this.$store.commit('addReputationPoints', -7)
      }
    },
    saving () {
      this.$router.go(-1)
      if (this.$store.state.difficulty === 'easy') {
        this.$store.commit('addMoney', 30)
      }
      if (this.$store.state.difficulty === 'hard') {
        this.$store.commit('addMoney', 20)
      }
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
