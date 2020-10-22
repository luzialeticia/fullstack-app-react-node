const Task = require('../models/Task')

module.exports = {
  addTask: (req, res) => {
    let task = new Task(req.body)
  
    task.save()
      .then(task => res.status(200).json(task))
      .catch(err => {
        res.status(400).send("There's ah error while adding the task", err)
      })
  },

  getAll: (req, res) => {
    Task.find((err, tasks) => {
      if(err) {
        res.status(400).send("There's an error while retrieving the tasks.")
      } else {
        res.status(200).json(tasks)
      }
    })
  },

  getById: (req, res) => {
    Task.findById(req.params.id, (err, task) => {
      if(err) {
        res.status(400).send(`There's an error while retrieving the task ${err}`)
      } else {
        res.status(200).json(task)
      }
    })
  },

  delete: (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, task) => {
      if(err) {
        res.status(400).send(`There's an error while deleting the task`, err)
      } else {
        res.status(200).json(req.params.id)
      }
    })
  },

  update: (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, task) => {
      if(err) {
        res.status(400).send("There's an error while updating the task", err)
      } else {
        res.status(200).json(task)
      }
    })
  }
}