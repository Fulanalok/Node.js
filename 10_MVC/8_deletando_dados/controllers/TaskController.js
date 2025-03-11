const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }

  static createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
  }

  static async showTasks(req, res) {

    const tasks = await Task.findAll({ raw: true })
      
    res.render('tasks/all', { tasks })
  }

  static async removeTask(req, res) {
    const id = req.body.id

    await
      Task.destroy({
        where: {
          id: id
        }
      })
    
    res.redirect('/tasks')
  }
}
