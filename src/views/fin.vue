<template>
  <div class="game">
    <header-illustration
      :title="header.title"
      :illustration="header.illustration"/>
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        {{ header.text }}
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button><ShareFacebook url="https://zhaoyingke.github.io/startup-nation/#/"/></button>
        <button><ShareTwitter url="https://zhaoyingke.github.io/startup-nation/#/"/></button>
        <button @click="gobackhome">Retourner à la page d'accueil</button>
      </div>
      <gauges/>
    </main>
  </div>
</template>

<script>
import Gauges from '@/components/Gauges'
import HeaderIllustration from '@/components/HeaderIllustration'
import { ShareFacebook, ShareTwitter } from 'vue-share-social'

export default {
  name: 'fin',
  components: {
    Gauges,
    HeaderIllustration,
    ShareFacebook,
    ShareTwitter
  },
  data () {
    return {
      typeItDone: false
    }
  },
  computed: {
    header () {
      if (this.$store.state.money > 1000) {
        return {
          title: 'Continuer comme tel...',
          illustration: 'Continue.png',
          text: `Tout comme la vôtre, la plupart des startups continuent à s'agrandir, sans pourtant passer par une entrée en bourse, ni se faire acheter par des joueurs majeurs dans le marché. `
        }
      }

      if ((this.$store.state.investorPoints > 16) || (this.$store.getters.npv > 0)) {
        return {
          title: 'Introduction en bourse',
          illustration: 'ipo.png',
          text: `Félicitations ! Vos investisseurs vous accompagnent jusqu'à l'introduction en bourse, une étape que très peu d'entreprises naissantes ont atteinte.`
        }
      }

      if ((this.$store.state.reputationPoints > 16) || (this.$store.state.investorPoints > 10)) {
        return {
          title: `Vous faire acheter par un concurrent`,
          illustration: `meetinginvestors.png`,
          text: `Félicitations ! Vous venez de recevoir une offre de rachat par un concurrent majeur dans le marché. L'acquisition n'est pas une défaite, car vous jouez un rôle important dans le secteur, ce qui pose une menace à l'égard des concurrents. Nombreux entrepreneurs, dont notamment votre conseiller Barthélemy Aupée, finissent par se faire acheter. Rester à juger si l'offre de rachat ira bien pour votre création.`
        }
      } else {
        return {
          title: `Pas d'objectif atteint`,
          illustration: `failure.png`,
          text: `L'entreprenariat n'est jamais simple - mais vous n'êtes pas seul.e. Le taux de faillite en France est de 40% pour une start-up non accompagnée, et de 20% pour celles accompagnées. En tout cas, n'ayez pas peur: vouz pouvez toujours ressayer!`
        }
      }
    }
  },
  watch: {},
  methods: {
    gobackhome () {
      this.$router.push({
        name: 'home'
      })
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
