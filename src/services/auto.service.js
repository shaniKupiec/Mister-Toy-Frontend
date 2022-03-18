import axios from 'axios'
axios.defaults.withCredentials = true

function _getUrl(id = '') {
  const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/auto' : '//localhost:3030/api/auto'
  return `${BASE_URL}/${id}`
}

export const autoService = {
  login,
  signup,
  logout,
}

async function login({ username, password }) {
  try {
    const res = await axios.post(`${_getUrl()}/login`, { username, password }, { withCredentials: true })
    // _store(KEY, res.data)
    return res.data
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function signup({ fullname, username, password }) {
  try {
    const res = await axios.post(`${_getUrl()}/signup`, { fullname, username, password }, { withCredentials: true })
    // _store(KEY, res.data)
    return res.data
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function logout() {
  try {
    await axios.post(`${_getUrl()}/logout`, { withCredentials: true })
    // _store(KEY, '')
  } catch(err) {
    console.log('err', err);
    throw err
  }
}