const TOY_KEY = 'toys'

export const toyService = {
  query,
  remove,
  save,
  getById,
  // getEmptyToy,
}

function query(filterBy) {
  return axios.get(TOY_KEY, { params: filterBy }).then((res) => res.data)
}

function getById(id) {
  return axios.get(TOY_KEY + id).then((res) => res.data)
}

function save(toy) {
  return toy._id ? axios.put(TOY_KEY + toy._id, toy) : axios.post(TOY_KEY, toy)
}

function remove(toyId) {
  return axios.delete(TOY_KEY + toyId)
}

// function getEmptyToy() {
//   return {
//     txt: '',
//     importance: 1,
//     color: '#398AB9',
//   }
// }
