<template>
  <div class="game">
    <button
      v-if="currentStep.advice"
      @click="showModal = !showModal"
      class="speech">
      <img :src="require(`@/assets/img/speech.png`)">
    </button>
    <modal
      v-if="showModal && currentStep.advice"
      @close="showModal = false">
      <article slot="body">
        {{ currentStep.advice }}
      </article>
    </modal>
    <header-illustration
      :title="header.title"
      :illustration="header.illustration" />
    <main class="box">
      <div
        :key="step"
        v-typeit="() => typeItDone = true"
        class="text">
        {{ typeof currentStep.message === 'string' ? currentStep.message : currentStep.message($store.state) }}
      </div>
      <div
        v-if="typeItDone"
        class="actions">
        <button
          v-for="(button, i) in currentStep.buttons"
          :key="i"
          @click="next(button.action)"
        >{{ button.label || button }}</button>
      </div>
      <gauges />
    </main>
    <p v-if="!typeItDone" class="game__hint">Appuyez sur espace pour afficher le texte complet</p>
  </div>
</template>

<script>
import GameSteps from '@/game'
import HeaderIllustration from '@/components/HeaderIllustration'
import Gauges from '@/components/Gauges'
import Modal from '@/components/Modal'

export default {
  name: 'game',
  components: {
    HeaderIllustration,
    Gauges,
    Modal
  },
  data () {
    return {
      steps: GameSteps,
      typeItDone: false,
      showModal: false
    }
  },
  computed: {
    step: {
      get () {
        return this.$route.params.step ? parseInt(this.$route.params.step) : 0
      },
      set (step) {
        this.$router.push({
          name: 'game',
          params: {
            step
          }
        })
      }
    },
    filteredSteps () {
      return this.steps.filter(step =>
        step.when ? step.when(this.$store.state) : true
      )
    },
    currentStep () {
      return this.filteredSteps[this.step]
    },
    header () {
      if (this.step === 3) {
        return {
          title: '',
          illustration: `${this.$store.state.difficulty}image.png`
        }
      }

      if (this.step === 4) {
        return {
          title: '',
          illustration: `foodicons.png`
        }
      }

      if (this.step >= 33) {
        return {
          title: 'Développer votre entreprise',
          illustration: 'scaling-image.png'
        }
      }
      if (this.step >= 24) {
        return {
          title: 'Valider votre idée',
          illustration: 'concepting-image.png'
        }
      }
      if (this.step >= 6) {
        return {
          title: 'Trouver une idée',
          illustration: 'ideation-conception.png'
        }
      }
      return false
    }
  },
  watch: {
    step () {
      this.typeItDone = false
    }
  },
  methods: {
    next (action) {
      const routeName = this.$route.name
      if (action) action(this.$store.commit, this.$store.state)
      if (this.$route.name === routeName) {
        if (this.filteredSteps[this.step + 1]) {
          this.step++
        } else {
          this.$router.push({
            name: 'home'
          })
        }
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

  .game {

    &__hint {
      font-size: 0.9rem;
      opacity: 0.8;
      text-align: center;
    }
  }
  .speech {
    float: right;
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 15px;
    width: 45px;
    img {
      width: 100%;
    }
  }
</style>
