//Require the library
const mongoose = require('mongoose');

//Connecting moongooose to the database name todo_db

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
    );

//acquire the connection
const db = mongoose.connection;

//On error connecting to the database
db.on('error', console.error.bind(console,'error connecting to db'));

//when connection is up
db.once('open',function(){
    console.log("Successfully connected to database");
})

