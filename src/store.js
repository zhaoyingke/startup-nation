import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    marketShare: 0, // Can be between 0 and 1
    reputationPoints: 0,
    investorPoints: 0,
    mode: null, // Can be easy, hard, or null
    autoFinance: null // Can be between 0 and 1, or null
  },
  mutations: {

  },
  actions: {

  }
})
