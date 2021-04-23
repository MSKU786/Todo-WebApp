//Require the library
const mongoose = require('mongoose');

//Defining the Schema of data 
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    Category: {
        type: String
    },
    date: {
        type: String,
    }
});

//Compiling our schema into a model
const Todo = mongoose.model('Todo', todoSchema);

//Exporting model to index.js
module.exports = Todo;