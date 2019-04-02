import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        state.money = Math.round(state.money * (payload * 0.95))
      } else {
        state.money = Math.round(state.money * payload)
      }
    },
    setAutoFinance (state, payload) {
      state.autoFinance = payload
    },
    addInvestorPoints (state, payload) {
      state.investorPoints += payload
    },
    multiplyInvestorPointsby (state, payload) {
      state.investorPoints = Math.round(state.investorPoints * payload)
    },
    addReputationPoints (state, payload) {
      state.reputationPoints += payload
    }
  },
  actions: {

  }
})
