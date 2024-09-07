const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
    }
});

const todoList = mongoose.model("todo", todoSchema);

module.exports = todoList;