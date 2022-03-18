import axios from 'axios'

function _getUrl(id = '') {
  const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/toy' : '//localhost:3030/api/toy'
  return `${BASE_URL}/${id}`
}

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
}

async function query(filterBy) {
  const res = await axios.get(_getUrl(), { params: filterBy })
  return res.data
}

async function getById(toyId) {
  const res = await axios.get(_getUrl(toyId))
  return res.data
}

async function save(toy) {
  const res = toy._id ? await axios.put(_getUrl(toy._id), toy) : await axios.post(_getUrl(), toy)
  return res.data
}

function remove(toyId) {
  return axios.delete(_getUrl(toyId))
}

function getEmptyToy() {
  return {
    name: '',
    price: 1,
    labels: [],
    inStock: true,
    reviews: [],
    img: `src/assets/images/${_getRandomInt(0, 11)}.png`,
  }
}

function _getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
