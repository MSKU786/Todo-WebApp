const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log("router loaded");

router.get('/',homeController.home);
router.use('/user', require('./users'));
module.exports = router;

const db = require('./config/mongoose.js');
//Require schema from todo_info.js
const Todo = require('./models/todo_info');
// Parser for form 
// used urlencoded to get the body of the form
router.use(express.urlencoded());


router.post('/add_task', function(req, res){
    Todo.create({
        description: req.body.description,
        Category : req.body.Category,
        date: req.body.date
    },function(err, newTodo){
        if(err){
            console.log('error in creating contact');
            return;
        }
        console.log("(*$($&(",newTodo);
        return res.redirect('./');  
    });
  
});
