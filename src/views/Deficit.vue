<template>
  <div class="game">
    <header-illustration title="Vous êtes en déficit" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Vous êtes en déficit, ne paniquez pas ! Les pertes temporaires arrivent souvent aux startups, même les plus connues. Ce coût pour révolutionner le marché est tout à fait acceptable et normal aux yeux des investisseurs, tant que vous ne perdez pas le potentiel de croissance. Prenez Uber comme exemple. L'entreprise a généré une perte nette de 865 millions dollars au quatrième trimestre de 2018, soit environ 20% de moins par rapport au trimestre passé. Ce qui a inquiété le marché, pourtant, c'est que la licorne californienne a connu un taux de réservation est en chute depuis plus d'un an...
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
