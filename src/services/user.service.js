import axios from 'axios'
axios.defaults.withCredentials = true

function _getUrl(id = '') {
  const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/user' : '//localhost:3000/api/user'
  return `${BASE_URL}/${id}`
}

export const userService = {
  query,
  getById,
  update,
  remove,
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
    await axios.delete(_getUrl('user', userId), { withCredentials: true })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}