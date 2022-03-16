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

function query(filterBy) {
  // return axios.get(URL, { params: filterBy }).then((res) => res.data)
  return axios.get(_getUrl(), { params: filterBy }).then((res) => res.data)
}

function getById(toyId) {
  // return axios.get(URL + toyId).then((res) =>  res.data)
  return axios.get(_getUrl(toyId)).then((res) => res.data)
}

function save(toy) {
  // return toy._id ? axios.put(URL + toy._id, toy).then((res) => res.data) : axios.post(URL, toy).then((res) => res.data)
  return toy._id ? axios.put(_getUrl(toy._id), toy).then((res) => res.data) : axios.post(_getUrl(), toy).then((res) => res.data)
}

function remove(toyId) {
  // return axios.delete(URL + toyId)
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
