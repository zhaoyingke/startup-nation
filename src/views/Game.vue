<template>
  <div class="game">
    <header v-if="header">
      <h2>{{ header.title }}</h2>
      <img
        :src="require(`../assets/img/${header.illustration}`)"
        class="illustration">
    </header>
    <main class="box">
      <p
        :key="step"
        v-typeit="() => typeItDone = true"
        class="text">
        {{ typeof currentStep.message === 'string' ? currentStep.message : currentStep.message($store.state) }}
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button
          v-for="(button, i) in currentStep.buttons"
          :key="i"
          @click="next(button.action)"
        >{{ button.label || button }}</button>
      </div>
      <div class="gauges">
        <div v-if="step >= 5" class="money">
          <money :value="$store.state.money" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GameSteps from '@/game'
import Money from '@/components/Money'

export default {
  name: 'game',
  components: {
    Money
  },
  data () {
    return {
      steps: GameSteps,
      typeItDone: false
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
      if (action) action(this.$store.commit, this.$store.state)
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
</script>

<style lang="scss" scoped>
  header {
    h2 {
      font-size: 45px;
      color: white;
      text-shadow: 2px 3px 0px #C91432;
    }
    .illustration {
      width: 100%;
      max-width: 500px;
      margin-bottom: -10px;
    }
  }

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

  .gauges {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    .money {
      background-image: url('../assets/img/gold-coin.png');
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 28px;
    }
  }
</style>
