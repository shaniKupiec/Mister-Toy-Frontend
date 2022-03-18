import { userService } from '../../services/user.service'
import { autoService } from '../../services/auto.service'

export default {
  state: {
    users: [],
    loggedInUser: null,
    filterBy: {},
  },
  getters: {
    users(state) {
      return state.users
    },
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users
    },
    removeUser(state, { userId }) {
      const idx = state.users.findIndex((user) => user._id === userId)
      state.users.splice(idx, 1)
    },
    saveUser(state, { savedUser }) {
      const idx = state.users.findIndex((currUser) => currUser._id === savedUser._id)
      if (idx !== -1) state.users.splice(idx, 1, savedUser)
      else state.users.unshift(savedUser)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadUsers({ commit, state }) {
      commit({ type: 'setIsLoading', isLoading: true })
      try {
        const users = await userService.query(state.filterBy)
        commit({ type: 'setUsers', users })
      } catch(err) {
        console.log('err', err)
      } finally {
        commit({ type: 'setIsLoading', isLoading: false })
      }
    },
    async removeUser({ commit }, { userId }) {
      try{
        await userService.remove(userId)
        commit({ type: 'removeUser', userId })
      } catch(err){
        console.log('err', err)
      }
    },
    async getUserById(_, { userId }) {
      try {
        const user = await userService.getById(userId)
        return JSON.parse(JSON.stringify(user))
      } catch(err) {
        console.log('err', err)
      }
    },
    async saveUser({ commit }, { user }) {
      const newUser = JSON.parse(JSON.stringify(user))
      try{
        const savedUser = user._id ? await userService.update(newUser) : 
          await autoService.signup(user)
        commit({ type: 'saveUser', savedUser })
      } catch(err){
        console.log('err', err)
      }
    },
    async login({ commit }, { userInfo }) {
      try{
        await autoService.login(userInfo)
        // commit({ type: 'saveUser', savedUser })
      } catch(err){
        console.log('err', err)
      }
    },
    async logout({ commit }) {
      try{
        await autoService.logout(userInfo)
        // commit({ type: 'saveUser', savedUser })
      } catch(err){
        console.log('err', err)
      }
    },
    async filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadUsers' })
    },
  },
}
