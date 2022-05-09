const express = require('express')
const router = express.Router();
require('../models');
const users = require('../Controllers/userController')
require('../models/index')
require('../index');
      

/////////// Accessing all methods for CRUD operation from userController.js file ////////////

//// For creating a User... ////
router.post('/create', users.create) 
      
//// For Fetching all users... ////
router.get('/', users.findAll)
      
//// For Updating a user.... ////
router.put('/update/:id', users.update)
    
//// For Deleting a User... ////
router.delete('/delete/:id', users.destroy)

    
module.exports = router