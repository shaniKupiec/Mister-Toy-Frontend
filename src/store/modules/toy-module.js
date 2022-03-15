import { toyService } from '../../services/toy.service'

export default {
  state: {
    toys: null,
    filterBy: null,
  },
  getters: {
    toysForDisplay(state) {
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
      else state.toys.push(savedToy)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys({ commit, state }) {
      toyService.query(state.filterBy).then((toys) => {
        commit({ type: 'setToys', toys })
      })
    },
    removeToy({ commit }, { toyId }) {
      toyService.remove(toyId).then(() => {
        commit({ type: 'removeToy', toyId })
      })
    },
    getToyById(context, { toyId }) {
      return toyService.getById(toyId).then((toy) => JSON.parse(JSON.stringify(toy)))
    },
    updateToy({ commit }, { toy }) {
      const newToy = JSON.parse(JSON.stringify(toy))
      toyService.save(newToy).then((savedToy) => {
        commit({ type: 'saveToy', savedToy })
      })
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadToys' })
    },
  },
}
