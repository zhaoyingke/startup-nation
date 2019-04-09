<template>
  <div class="gauges">
    <div class="gauge money">
      <animated-number
        :value="$store.state.money" />
    </div>
    <!-- <div class="gauge investors">
      <span>{{ $store.getters.investorNote }}</span>
    </div> -->
    <div class="gauge reputation">
      <animated-number
        :value="$store.state.reputationPoints" />
        <span class="label">clients</span>
    </div>
  </div>
</template>
<script>
import AnimatedNumber from '@/components/AnimatedNumber'

export default {
  name: 'Gauges',
  components: {
    AnimatedNumber
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
      align-items: center;
      color: white;
      font-size: 28px;
      margin: 5px;

      &.money {
        background-image: url('../assets/img/gold-coin.png');
      }
      &.investors {
        background-color: black;
      }
      &.reputation {
        color: black;
        font-size: 18px;
        .label {
          margin-left: 3px;
        }
      }
    }
  }
</style>
