<template>
  <div class="game">
    <header>
      <h2>You almost lost</h2>
      <!-- <img
        :src="require(`../assets/img/${header.illustration}`)"
        class="illustration"> -->
    </header>
    <main class="box">
      <p
        v-typeit="() => typeItDone = true"
        class="text">
        bla bla bla
      </p>
      <div
        v-if="typeItDone"
        class="actions">
        <button @click="() => $router.go(-1)">Start again</button>
      </div>
      <div class="gauges">
        <div class="money">
          <money :value="$store.state.money" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Money from '@/components/Money'

export default {
  name: 'lost',
  components: {
    Money
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
