import { storageService } from './async-storage-service.js'
import { utilService } from './util.service.js'
const TODO_KEY = 'todos'

export const todoService = {
  query,
  remove,
  save,
  getEmptyTodo,
  getById,
}

function query() {
  return storageService.query(TODO_KEY)
    .then((todos) => (!todos || !todos.length ? _createTodos() : todos))
}

function getById(todoId) {
  return storageService.get(TODO_KEY, todoId)
}

function save(todo) {
  return todo._id ? storageService.put(TODO_KEY, todo) : storageService.post(TODO_KEY, todo)
}

function remove(todoId) {
  return storageService.remove(TODO_KEY, todoId)
}

function _createTodos() {
  const todos = [_createTodo('eat'), _createTodo('sleep'), _createTodo('buy food'), _createTodo('listen to music')]
  storageService.postMany(TODO_KEY, todos)
  return todos
}

function _createTodo(txt) {
  var todo = getEmptyTodo()
  todo.txt = txt
  todo._id = utilService.makeId()
  return todo
}

function getEmptyTodo() {
  return {
    txt: '',
    importance: 1,
    color: '#398AB9',
  }
}
