// import { carService } from '../../services/car-service'

export default {
  state: {
    toys: null,
    // toy: {
    //   _id: 't101',
    //   name: 'Talking Doll',
    //   price: 123,
    //   labels: ['Doll', 'Battery Powered', 'Baby'],
    //   createdAt: 1631031801011,
    //   inStock: true,
    // },
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
    // saveCar(state, { car }) {
    //   const idx = state.cars.findIndex((currCar) => currCar.id === car.id)
    //   if (idx !== -1) state.cars.splice(idx, 1, car)
    //   else state.cars.push(car)
    // },
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
      // carService.query().then((cars) => {
      //   commit({ type: 'setCars', cars })
      // })
    },
    removeToy({ commit }, { id }) {
      commit({ type: 'removeToy', id })
      // carService.remove(id).then(() => {
      //   commit({ type: 'removeCar', id })
      // })
    },
    getToyById(context, { id }) {
      const toys = context.getters.toysForDisplay
      return toys.find(toy => toy._id === id)
      // carService.remove(id).then(() => {
      //   commit({ type: 'removeCar', id })
      // })
    },
    // saveCar({ commit }, { car }) {
    //   carService.save(car).then((car) => {
    //     commit({ type: 'saveCar', car })
    //   })
    // },
  },
}
