import { httpService } from './http.service'

export const userService = {
  query,
  getById,
  update,
  remove,
}

async function query(filterBy = {}) {
  try {
    return await httpService.get('user/', { params: filterBy })
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function getById(userId) {
  try {
    return await httpService.get(`toy/${userId}`)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function update(user) {
  try {
    return await httpService.get(`toy/${user._id}`, user)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}

async function remove(userId) {
  try {
    await httpService.delete(`toy/${userId}`)
  } catch(err) {
    console.log('err', err);
    throw err
  }
}