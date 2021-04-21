const express = require('express');
const app = express();
const port = 4000

const db = require('./config/mongoose.js');

//Require schema from todo_info.js
const Conatact = require('./models/contact');

//Use express router
app.use('/',require('./routes'));

//Setting up the views
app.set('view engine','ejs');
app.set('views','./views');

//Setting up the parser

app.use(express.static('assets'));


app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})