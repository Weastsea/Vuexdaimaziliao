import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addd(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    subb(state) {
      state.count--
    },
    subbN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('addd')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('subb')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subbN', step)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return '当前最新数量是【' + state.count + '】'
    }
  }
})
