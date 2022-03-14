import axios from 'axios'

const URL = '//localhost:3030/api/toy/'

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
}

function query(filterBy) {
  return axios.get(URL, { params: filterBy }).then((res) => res.data)
}

function getById(toyId) {
  return axios.get(URL + toyId).then((res) =>  res.data)
}

function save(toy) {
  return toy._id ? axios.put(URL + toy._id, toy).then((res) => res.data) : axios.post(URL, toy).then((res) => res.data)
}

function remove(toyId) {
  return axios.delete(URL + toyId)
}

function getEmptyToy() {
  return {
    name: '',
    price: 1,
    labels: [],
    inStock: true,
  }
}
