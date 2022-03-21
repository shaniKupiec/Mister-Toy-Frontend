import { httpService } from './http.service'
import { utilService } from './util.service'
const ENDPOINT = 'toy'

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(toyId) {
  return await httpService.get(`${ENDPOINT}/${toyId}`)
}

async function save(toy) {
  return toy._id ? await httpService.put(`${ENDPOINT}/${toy._id}`, toy) : await httpService.post(ENDPOINT + '/', toy)
}

function remove(toyId) {
  return httpService.delete(`${ENDPOINT}/${toyId}`)
}

function getEmptyToy() {
  const img = `src/assets/images/${utilService.getRandomInt(0, 11)}.png`
  return {
    name: '',
    price: 1,
    labels: [],
    inStock: true,
    img,
  }
}