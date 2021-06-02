const express = require("express");

const router = express.Router();


const db = require('../config/mongoose.js');
//Require schema from todo_info.js
const Todo = require('../models/todo_info');
// Parser for form 
// used urlencoded to get the body of the form
router.use(express.urlencoded());
console.log("router loaded");


//Whenver we start the server this action triggers
router.get('/',function(req,res){
    Todo.find({},function(err, todos)
    {
        //Whenver an error occured
        if(err)
        {
            console.log('error in fetching contacts');
            return;
        }
        //redering the home.js while passing the data from monodb todos database
        return res.render('home',{
            todo_list : todos
        })
    })
});


//whenver an add_task action trigger
router.post('/add_task', function(req, res){
    var dateString = req.body.date;
    //If no date is slecected
    if(dateString=="")
        req.body.date="No Deadline";
    //Creating a list items and send it to server and page
    Todo.create({
        description: req.body.description,
        Category : req.body.Category,
        date: req.body.date
    },function(err, newTodo){
        if(err){
            console.log('error in creating contact');
            return;
        }
        // returing to the home page
        return res.redirect('./');  
    });
  
});

//Whenever remove task button clicked all the slected boxes delete from server as well as in page
router.post('/remove', function(req,res)
{

    let num = req.body.checkbox;    
    //find the data in contact database using id and delete it
    let i=0;
    //For loop because user can select mulitple items
    //If only one elemetn is present then else part will run
    for(let j in num)
    {
        //find and delete function in Todo
        if(num[j].length>4){
            Todo.findByIdAndDelete(num[j],function(err){
        console.log(num[j]);
        if(err)
        {
            console.log('error in deleting an object from database');
            return;
        }
         });}
        else{
            Todo.findByIdAndDelete(num,function(err){
        //return res.redirect('/');
             if(err)
            {
                console.log('error in deleting an object from database');
            return;
             }
          });
    }
    }
    return res.redirect('/');
});

//Exporting the rotuer
module.exports = router;





