//Require express framework
const express = require('express');
const app = express();

//Port number where our localhost will be executed
const port = process.env.PORT || 8000;


//Use express router
app.use('/',require('./routes'));
//Setting up the views
app.set('view engine','ejs');
app.set('views','./views');

//Setting up the parser

app.use(express.static('assets'));

//Whenever an error occurend
app.get('*', function(req, res){
    res.status(404).send("<h1>Page Not found</h1><a href='./'><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fdiaryofdennis.com%2F2016%2F06%2F07%2Fthe-best-free-meme-generators-online%2F&psig=AOvVaw0r01nb8QoUSFgQCBb_370W&ust=1619254113661000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiWmev9k_ACFQAAAAAdAAAAABAD' alt='back'></a>")
});
  
app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})
