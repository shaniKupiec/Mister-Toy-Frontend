import { httpService } from './http.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const ENDPOINT = 'auth'

export const authService = {
  login,
  signup,
  logout,
  getLoggedinUser,
}

async function login({ username, password }) {
  try {
    const res = await httpService.post(`${ENDPOINT}/login`, { username, password })
    _saveLocalUser(res)
    return res
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function signup({ fullname, username, password }) {
  try {
    const res = await httpService.post(`${ENDPOINT}/signup`, { fullname, username, password })
    _saveLocalUser(res)
    return res
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function logout() {
  try {
    await httpService.post(`${ENDPOINT}/logout`)
    _saveLocalUser('')
    return
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}