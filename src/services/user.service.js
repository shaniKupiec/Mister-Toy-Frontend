import axios from 'axios'
axios.defaults.withCredentials = true

function _getUrl(id = '') {
  const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/user' : '//localhost:3030/api/user'
  return `${BASE_URL}/${id}`
}

export const userService = {
  query,
  getById,
  update,
  remove,
  // getLoggedinUser,
}

async function query(filterBy = {}) {
  try {
    const res = await axios.get(_getUrl(), { params: filterBy }, { withCredentials: true })
    return res.data
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function getById(userId) {
  try {
    const res = await axios.get(`${_getUrl()}/${userId}`, { withCredentials: true })
    return res.data
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function update(user) {
  try {
    const res = await axios.get(`${_getUrl()}/${user._id}`, user, { withCredentials: true })
    return res.data
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function remove(userId) {
  try {
    const res = await axios.delete(_getUrl('user', userId), { withCredentials: true })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

// function getLoggedinUser() {
//   return _load(KEY)
// }

// const KEY = 'user'

// function _load(key) {
//   var val = localStorage.getItem(key)
//   return (val)? JSON.parse(val) : null;
// }

// function _store(key, val) {
//   localStorage[key] = JSON.stringify(val);
// }