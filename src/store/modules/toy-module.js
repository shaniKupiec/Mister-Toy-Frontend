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
      const toys = [
        {
          _id: 't101',
          name: 'Talking Doll1',
          price: 123,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
        {
          _id: 'sdfbg',
          name: 'Talking Doll2',
          price: 1000,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
        {
          _id: 'kl2345',
          name: 'Talking Doll3',
          price: 7,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
        {
          _id: 'vbnm',
          name: 'Talking Doll4',
          price: 5,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
      ]
      commit({ type: 'setToys', toys })
      // toyService.query().then((toys) => {
      //   commit({ type: 'setToys', toys })
      // })
    },
    removeToy({ commit }, { id }) {
      commit({ type: 'removeToy', id })
      // toyService.remove(id).then(() => {
      //   commit({ type: 'removeToy', id })
      // })
    },
    getToyById(context, { id }) { // add deep copy
      const toys = context.getters.toysForDisplay
      return toys.find(toy => toy._id === id)
      // toyService.getById(id)
    },
    updateToy(context, { toy }) { // add deep copy
      const toys = context.getters.toysForDisplay
      const currIdx = toys.findIndex(toy => toy._id === id)
      return JSON.parse(JSON.stringify(currToy))

      // toyService.save(toy).then((savedToy) => {
      //   commit({ type: 'saveToy', savedToy })
      // })
    },
  },
}
