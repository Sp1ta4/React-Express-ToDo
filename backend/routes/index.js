const express = require('express');
const router = express.Router();
const todosController = require('../AppControllers/todos-controller')
/* GET home page. */
router.get('/', todosController.getTodos);
router.post('/', todosController.createTodo);
router.put('/', todosController.updateCompleted);
router.delete('/:id', todosController.deleteTask);

module.exports = router;
