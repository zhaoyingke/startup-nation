<template>
  <div class="game">
    <header-illustration title="rencontrer un investisseur" />
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        Félicitations ! Votre entreprise a attiré l'attention d'un fond de capital-risque. Allez leur pitcher votre projet pour un éventuel soutien financier pour votre entreprise !
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="() => $router.go(-1)">J'attends leurs réponse avec impatience...</button>
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
