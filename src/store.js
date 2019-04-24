import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

// import Finance from 'financejs'
// import { median } from 'd3-array'

// const { NPV } = new Finance()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moneyHistory: [],
    money: 0,
    marketShare: 0, // Can be between 0 and 1
    reputationPoints: 0,
    investorPoints: 0,
    difficulty: 'easy', // Can be easy, hard
    autoFinance: 0, // Can be between 0 and 1
    growthRate: 3.5
  },
  getters: {
    // lastMoneyTurns: state => state.moneyHistory.slice(Math.max(-state.moneyHistory.length, -20)),
    // medianLastMoneyTurns: (_, getters) => median(getters.lastMoneyTurns.sort()),
    // initialInvestment: (_, getters) => getters.medianLastMoneyTurns * getters.lastMoneyTurns.length * -1,
    // npv: (state, getters) => NPV(state.growthRate, getters.initialInvestment, ...getters.lastMoneyTurns)
  },
  mutations: {
    setDifficulty (state, payload) {
      state.difficulty = payload
    },
    addMoney (state, payload) {
      state.money += payload
      state.moneyHistory.push(state.money)
    },
    multiplyMoneyBy (state, payload) {
      if (state.money > 0) {
        if (state.difficulty === 'hard') {
          state.money = state.money * (payload * 0.95)
        } else {
          state.money = state.money * payload
        }
      }
      state.moneyHistory.push(state.money)
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
    store => {
      store.subscribe((mutation, state) => {
        if (state.money < 0) {
          return router.push({
            name: 'deficit'
          })
        }

        if (state.investorPoints >= 20) {
          return router.push({
            name: 'investor'
          })
        }

        if (state.reputationPoints >= 20) {
          return router.push({
            name: 'reputation'
          })
        }

        if ((state.reputationPoints >= 20) || (state.investorPoints >= 20)) {
          return router.push({
            name: 'concours'
          })
        }
      })
    }
  ]
})
