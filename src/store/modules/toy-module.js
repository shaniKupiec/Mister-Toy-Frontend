// import { carService } from '../../services/car-service'

export default {
  state: {
    toys: null,
    toy: {
      _id: 't101',
      name: 'Talking Doll',
      price: 123,
      labels: ['Doll', 'Battery Powered', 'Baby'],
      createdAt: 1631031801011,
      inStock: true,
    },
  },
  getters: {
    toys(state) {
      return state.toys
    },
  },
  mutations: {
    // setCars(state, { cars }) {
    //   state.cars = cars
    // },
    // removeCar(state, { id }) {
    //   const idx = state.cars.findIndex((car) => car.id === id)
    //   state.cars.splice(idx, 1)
    // },
    // saveCar(state, { car }) {
    //   const idx = state.cars.findIndex((currCar) => currCar.id === car.id)
    //   if (idx !== -1) state.cars.splice(idx, 1, car)
    //   else state.cars.push(car)
    // },
  },
  actions: {
    // loadCars({ commit }) {
    //   carService.query().then((cars) => {
    //     commit({ type: 'setCars', cars })
    //   })
    // },
    // removeCar({ commit }, { id }) {
    //   carService.remove(id).then(() => {
    //     commit({ type: 'removeCar', id })
    //   })
    // },
    // saveCar({ commit }, { car }) {
    //   carService.save(car).then((car) => {
    //     commit({ type: 'saveCar', car })
    //   })
    // },
  },
}
