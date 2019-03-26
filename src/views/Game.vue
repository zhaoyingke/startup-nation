<template>
  <div class="game">
    <p>{{ typeof currentStep.message === 'string' ? currentStep.message : currentStep.message($store.state) }}</p>
    <button
      v-for="(button, i) in currentStep.buttons"
      :key="i"
      @click="next(button.action)"
    >{{ button.label || button }}</button>
    <div class="gauges">
      <div v-if="step >= 5" class="money">{{ $store.state.money }}</div>
    </div>
  </div>
</template>

<script>
import GameSteps from '@/game'

export default {
  name: 'game',
  components: {},
  data () {
    return {
      steps: GameSteps
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
