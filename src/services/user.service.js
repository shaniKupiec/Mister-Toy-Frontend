import { httpService } from './http.service'
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