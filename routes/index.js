const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log("router loaded");

router.get('/',homeController.home);
router.use('/user', require('./users'));

module.exports = router;

// Parser for form 
// used urlencoded to get the body of the form
router.use(express.urlencoded());
router.post('/add_task', function(req, res){
    console.log(req.body);
    return res.redirect('./');  
});
