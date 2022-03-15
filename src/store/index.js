import { createStore } from 'vuex'
import toyStore from './modules/toy-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
  },
  actions: {},
  modules: {
    toyStore,
  },
})

export default store