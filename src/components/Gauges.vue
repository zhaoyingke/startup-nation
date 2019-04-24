<template>
  <div class="gauges">
    <div
      v-if="step >= 5"
      class="gauge money">
      <animated-number
        :value="$store.state.money" />
    </div>
    <!-- <div class="gauge investors">
      <span>{{ $store.getters.investorNote }}</span>
    </div> -->
    <div
      v-if="step >= 13"
      class="gauge reputation">
      <animated-number
        :value="$store.state.reputationPoints" />
    </div>
  </div>
</template>
<script>
import AnimatedNumber from '@/components/AnimatedNumber'

export default {
  name: 'Gauges',
  components: {
    AnimatedNumber
  },
  computed: {
    step () {
      return this.$route.params.step ? parseInt(this.$route.params.step) : 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .gauges {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    .gauge {
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: white;
      margin: 5px;
      span {
        text-align: center;
        background-color: #C91432;
        border-radius: 5px;
        font-size: 14px;
        line-height: 16px;
        padding: 4px 10px;
        font-weight: bold;
      }

      &.money {
        background-image: url('../assets/img/gold-coin.png');
      }
      &.reputation {
        background-image: url('../assets/img/smiley.png');
      }
    }
  }
</style>
