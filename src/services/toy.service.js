import axios from 'axios'
axios.defaults.withCredentials = true
import { utilService } from './util.service.js'

function _getUrl(id = '') {
  const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/toy' : '//localhost:3000/api/toy'
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
  const res = await axios.get(_getUrl(), { params: filterBy }, { withCredentials: true })
  return res.data
}

async function getById(toyId) {
  const res = await axios.get(_getUrl(toyId), { withCredentials: true })
  return res.data
}

async function save(toy) {
  const res = toy._id ? await axios.put(_getUrl(toy._id), toy, { withCredentials: true }) :
    await axios.post(_getUrl(), toy, { withCredentials: true })
  return res.data
}

function remove(toyId) {
  return axios.delete(_getUrl(toyId), { withCredentials: true })
}

function getEmptyToy() {
  const img = `src/assets/images/${utilService.getRandomInt(0, 11)}.png`
  console.log(img);
  return {
    name: '',
    price: 1,
    labels: [],
    inStock: true,
    reviews: [],
    img,
    // img: `src/assets/images/${utilService.getRandomInt(0, 11)}.png`,
  }
}