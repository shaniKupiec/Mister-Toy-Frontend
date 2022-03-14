import { toyService } from '../../services/toy.service'

export default {
  state: {
    toys: null,
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
    removeToy(state, { id }) {
      const idx = state.toys.findIndex((toy) => toy.id === id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { savedToy }) {
      const idx = state.toys.findIndex((currToy) => currToy.id === savedToy.id)
      if (idx !== -1) state.toys.splice(idx, 1, savedToy)
      else state.toys.push(savedToy)
    },
  },
  actions: {
    loadToys({ commit }) {
      // commit({ type: 'setToys', toys })
      toyService.query().then((toys) => {
        commit({ type: 'setToys', toys })
      })
    },
    removeToy({ commit }, { id }) {
      // commit({ type: 'removeToy', id })
      toyService.remove(id).then(() => {
        commit({ type: 'removeToy', id })
      })
    },
    getToyById(context, { id }) {
      // const toys = context.getters.toysForDisplay
      // return toys.find(toy => toy._id === id)
      toyService.getById(id).then(toy => JSON.parse(JSON.stringify(toy)))
    },
    updateToy({ commit }, { toy }) {
      // const toys = context.getters.toysForDisplay
      // const currIdx = toys.findIndex(toy => toy._id === id)
      // return JSON.parse(JSON.stringify(currToy))

      const newToy = JSON.parse(JSON.stringify(toy))
      toyService.save(newToy).then((savedToy) => {
        commit({ type: 'saveToy', savedToy })
      })
    },
  },
}
