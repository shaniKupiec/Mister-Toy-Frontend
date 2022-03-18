import { toyService } from '../../services/toy.service'

export default {
  state: {
    toys: [],
    filterBy: null,
  },
  getters: {
    toys(state) {
      return state.toys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((toy) => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { savedToy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === savedToy._id)
      if (idx !== -1) state.toys.splice(idx, 1, savedToy)
      else state.toys.unshift(savedToy)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadToys({ commit, state }) {
      commit({ type: 'setIsLoading', isLoading: true })
      try {
        const toys = await toyService.query(state.filterBy)
        commit({ type: 'setToys', toys })
      } catch(err) {
        console.log('err', err)
      } finally {
        commit({ type: 'setIsLoading', isLoading: false })
      }
    },
    async removeToy({ commit }, { toyId }) {
      try{
        await toyService.remove(toyId)
        commit({ type: 'removeToy', toyId })
      } catch(err){
        console.log('err', err)
      }
    },
    async getToyById(_, { toyId }) {
      try {
        const toy = await toyService.getById(toyId)
        return JSON.parse(JSON.stringify(toy))
      } catch(err) {
        console.log('err', err)
      }
    },
    async saveToy({ commit }, { toy }) {
      const newToy = JSON.parse(JSON.stringify(toy))
      try{
        const savedToy = await toyService.save(newToy)
        commit({ type: 'saveToy', savedToy })
      } catch(err){
        console.log('err', err)
      }
    },
    async filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadToys' })
    },
  },
}
