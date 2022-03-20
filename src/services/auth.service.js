import { httpService } from './http.service'

export const authService = {
  login,
  signup,
  logout,
  // getLoggedinUser,
}

async function login({ username, password }) {
  try {
    await httpService.post(`auth/login`, { username, password })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function signup({ fullname, username, password }) {
  try {
    return await httpService.post(`auth/signup`, { fullname, username, password })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function logout() {
  try {
    return await httpService.post(`auth/logout`)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

// async function getLoggedinUser() {
//   try {
//     return await httpService.get(`auth/loggedInUser`)
//   } catch(err) {
//     console.log('err', err);
//     throw err
//   }
// }