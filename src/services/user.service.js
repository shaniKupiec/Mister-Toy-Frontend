import { httpService } from './http.service'
import { authService } from './auth.service'
import { socketService } from './socket.service'

const ENDPOINT = 'user'

export const userService = {
  query,
  getById,
  update,
  remove,
}

async function query(filterBy = {}) {
  try {
    return await httpService.get(ENDPOINT + '/', { params: filterBy })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function getById(userId) {
  try {
    return await httpService.get(`${ENDPOINT}/${userId}`)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function update(user) {
  try {
    return await httpService.get(`${ENDPOINT}/${user._id}`, user)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function remove(userId) {
  try {
    await httpService.delete(`${ENDPOINT}/${userId}`)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

// This is relevant when backend is connected
(async () => {
    var user = authService.getLoggedinUser()
    if (user) socketService.emit('set-user-socket', user.username)
})();

// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     var user = getLoggedinUser()
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();