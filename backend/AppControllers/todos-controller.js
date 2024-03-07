const Todo = require('../models/todo');

module.exports = class TodosController {
  static getTodos = (req, res, next) => {
    Todo
      .find()
      .sort({ createdAt: -1 })
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }
  static createTodo = (req, res, next) => {
    const { todo } = req.body;
    new Todo({ todo, completed: false })
      .save()
      .then(response => res.json(response))
      .catch(err => console.log(err))
  }
  static updateCompleted = async (req, res, next) => {
    const { id } = req.body;
    const { todo, completed } = await Todo.findById(id);
    Todo
      .findByIdAndUpdate(id, { todo, completed: !completed })
      .then(response => res.json(response))
      .catch(error => console.log(error))
  }
  static deleteTask = (req, res, next) => {
    const { id } = req.params;
    Todo
      .findByIdAndDelete({ _id: id })
      .then(response => res.json(response))
      .catch(error => console.log(error))
  }
}