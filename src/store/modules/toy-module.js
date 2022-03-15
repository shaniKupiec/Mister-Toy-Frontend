import { toyService } from '../../services/toy.service'

export default {
  state: {
    toys: [],
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
      else state.toys.unshift(savedToy)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys({ commit, state }) {
      commit({ type: 'setIsLoading', isLoading: true })
      toyService
        .query(state.filterBy)
        .then((toys) => {
          commit({ type: 'setToys', toys })
        })
        .catch((err) => {
          console.log('err', err)
        })
        .finally(() => {
          commit({ type: 'setIsLoading', isLoading: false })
        })
    },
    removeToy({ commit }, { toyId }) {
      toyService
        .remove(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    getToyById(context, { toyId }) {
      return toyService
        .getById(toyId)
        .then((toy) => JSON.parse(JSON.stringify(toy)))
        .catch((err) => {
          console.log('err', err)
        })
    },
    saveToy({ commit }, { toy }) {
      const newToy = JSON.parse(JSON.stringify(toy))
      toyService
        .save(newToy)
        .then((savedToy) => {
          commit({ type: 'saveToy', savedToy })
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadToys' })
      console.log(filterBy, 'filterBy')
    },
  },
}
