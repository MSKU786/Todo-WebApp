//Require the library
const mongoose = require('mongoose');

//Connecting moongooose to the database name todo_db
mongoose.connect('mongodb://localhost/todo_db');

//acquire the connection
const db = mongoose.connection;

//On error connecting to the database
db.on('error', console.error.bind(console,'error connecting to db'));

//when connection is up
db.once('open',function(){
    console.log("Successfully connected to database");
})

