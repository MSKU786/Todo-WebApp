//Require the library
const moongoose = require('mongoose');

//Connecting moongooose to the database name todo_db
moongoose.connect('mongodb://localhost/todo_db');

//This db is the connection between database and mongoose
const db = moongoose.connection();

//On error connecting to the database
db.on('error', console.error.bind(console,'error connecting to db'));

//when connection is up
db.once('open',function(){
    console.log("Successfully connected t ")
})

