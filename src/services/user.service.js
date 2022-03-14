import { storageService } from './async-storage-service.js'
const USER_KEY = 'user'

export const userService = {
  query,
  save,
  saveActivity,
}

function query() { 
  return storageService.query(USER_KEY)
    .then(user => (!user || !user.length) ? _createUser() : user[0])
}

function save(user) {
  return (user._id) ? storageService.put(USER_KEY, user) : storageService.post(USER_KEY, user)
}

function saveActivity(txt){
  const newAct = _getEmptyActivity(txt)
  return query().then(user => {
    console.log('saving act', user);
    user.activities.unshift(newAct)
    return save(user)
  })
}

function _getEmptyActivity(txt) {
  return {
    txt,
    at: Date.now(),
  }
}

function _createUser() {
  const user = {
    fullName: 'Shani',
    activities: [],
  }
  save(user)
  return user
}
