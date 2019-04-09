<template>
  <div class="gauges">
    <div class="money">
      <money :value="$store.state.money" />
    </div>
  </div>
</template>
<script>
import Money from '@/components/Money'
// import investorPoints from '@/components/investorPoints'
//  import reputationPoints from '@/components/reputationPoints'

export default {
  name: 'Gauges',
  components: {
    Money
  }
}
</script>

<style lang="scss" scoped>
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
