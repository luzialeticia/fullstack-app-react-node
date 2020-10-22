const express = require('express')
const Task = express.Router()
const controller = require('../controllers/Task')
const cors = require('cors')

Task.route('/', cors())
  .post(controller.addTask)
  .get(controller.getAll)

Task.route('/:id', cors())
  .get(controller.getById)
  .delete(controller.delete)
  .put(controller.update)

module.exports = Task