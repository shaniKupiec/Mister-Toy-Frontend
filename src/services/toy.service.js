import { httpService } from './http.service'

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
}

async function query(filterBy) {
  return await httpService.get('toy/', { params: filterBy })
}

async function getById(toyId) {
  return await httpService.get(`toy/${toyId}`)
}

async function save(toy) {
  return toy._id ? await httpService.put(`toy/${toy._id}`, toy) : await httpService.post('toy/', toy)
}

function remove(toyId) {
  return httpService.delete(`toy/${toyId}`)
}

function getEmptyToy() {
  const img = `src/assets/images/${utilService.getRandomInt(0, 11)}.png`
  return {
    name: '',
    price: 1,
    labels: [],
    inStock: true,
    reviews: [],
    img,
  }
}