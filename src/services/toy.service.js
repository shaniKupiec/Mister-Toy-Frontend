import axios from 'axios'

const URL = '//localhost:3030/api/toy'


export const toyService = {
  query,
  remove,
  save,
  getById,
  // getEmptyToy,
}

function query(filterBy) {
  return axios.get(URL, { params: filterBy }).then((res) => res.data)
}

function getById(id) {
  return axios.get(URL + id).then((res) => res.data)
}

function save(toy) {
  return toy._id ? axios.put(URL + toy._id, toy) : axios.post(URL, toy)
}

function remove(toyId) {
  return axios.delete(URL + toyId)
}

// function getEmptyToy() {
//   return {
//     txt: '',
//     importance: 1,
//     color: '#398AB9',
//   }
// }
