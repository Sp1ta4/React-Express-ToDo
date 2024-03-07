const mongoose = require('mongoose');

const todo = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Todo', todo);