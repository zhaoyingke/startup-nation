import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const money = store => {
  store.subscribe((mutation, state) => {
    if (state.money <= 0 && router.currentRoute.params.step > 4) {
      router.push({
        name: 'lost'
      })
    }
  })
}

export default new Vuex.Store({
  state: {
    money: 0,
    marketShare: 0, // Can be between 0 and 1
    reputationPoints: 0,
    investorPoints: 0,
    difficulty: null, // Can be easy, hard, or null
    autoFinance: null // Can be between 0 and 1, or null
  },
  mutations: {
    setDifficulty (state, payload) {
      state.difficulty = payload
    },
    addMoney (state, payload) {
      state.money += payload
    },
    multiplyMoneyBy (state, payload) {
      if (state.difficulty === 'hard') {
        state.money = state.money * (payload * 0.95)
      } else {
        state.money = state.money * payload
      }
    },
    setAutoFinance (state, payload) {
      state.autoFinance = payload
    },
    addInvestorPoints (state, payload) {
      state.investorPoints += payload
    },
    multiplyInvestorPointsby (state, payload) {
      state.investorPoints = state.investorPoints * payload
    },
    addReputationPoints (state, payload) {
      state.reputationPoints += payload
    }
  },
  actions: {},
  plugins: [
    money
  ]
})
