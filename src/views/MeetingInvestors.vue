<template>
  <div class="game">
    <header-illustration title="rencontrer un investisseur"/>
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Félicitations ! Votre entreprise a attiré l'attention d'un fond de capital-risque. Allez leur pitcher votre projet pour un éventuel soutien financier pour votre entreprise !
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="click">J'attends leurs réponse avec impatience...</button>
      </div>
      <gauges />
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'

export default {
  name: 'meeting_investors',
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
    header () {
      return {
        illustration: 'scaling-image.png'
      }
    }
  },
  watch: {},
  methods: {
    click () {
      this.$store.commit('addInvestorPoints', -15)
      this.$store.commit('addMoney', Math.floor(Math.random() * 10) * 16)
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
