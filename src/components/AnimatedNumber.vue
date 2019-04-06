<template>
  <animated-number-vue
    :value="value"
    :formatValue="removeDecimals"
    :duration="300"
  />
</template>
<script>
import AnimatedNumberVue from 'animated-number-vue'

export default {
  name: 'Money',
  components: {
    AnimatedNumberVue
  },
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    removeDecimals (value) {
      return `${value.toFixed(0)}`
    }
  }
}
</script>
