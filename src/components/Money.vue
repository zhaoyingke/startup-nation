<template>
  <animated-number
    :value="value"
    :formatValue="formatToPrice"
    :duration="300"
  />
</template>
<script>
import AnimatedNumber from "animated-number-vue"

export default {
  name: 'Money',
  components: {
    AnimatedNumber
  },
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
}
</script>
