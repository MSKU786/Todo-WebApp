const express = require('express');
const app = express();
const port = 4000



//Use express router
app.use('/',require('./routes'));

//Setting up the views
app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('assets'));

app.post('/add_task', function(req, res){
    // contactList.push(
    //     {
    //         name: req.body.name,
    //         phone: req.body.phone
    //     }
    // )
    // Contact.create({
    //     name: req.body.name,
    //     phone: req.body.phone
    // }, function(err, newContact)
    // {
    //     if(err){
    //         console.log('error in creating contact');
    //         return;
    //     }
    //     console.log("******^&&",newContact);
    //     return res.redirect('back');  
    // })
    console.log(req.body);
    return res.redirect('back');
});

app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})