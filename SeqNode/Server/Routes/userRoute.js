const express = require('express')
const router = express.Router();
const {users} = require('../models');
require('../models/index')
require('../index');

// exports.findall = (req, res)=>{
  //   users.findAll()
  //   .then((data) => {
    //     return res.send(data);
    //   })
    //   .catch((err) => {
      //     res.send(`Error: ${err.message}`);
      //   });
      // };
      // })
      
      
      //// For creating a User... ////
      
      router.post('/create', async (req, res) => {
        console.log("Creating new entry...");
        if (!(req.body.firstName )) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
        // Create a Tutorial
        const tutorial = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
        };
        // Save Tutorial in the database
        users.create(tutorial)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
          });
        });
      })


      //// For Fetching all users... ////

    router.get('/', async (req, res) => {
      // res.json({ })
      let gets = await users.findAll();
      console.log("Got all data.")
      return res.json(gets)
  })


  //// For Updating a user.... ////

  router.put('/update/:id', async (req, res) => {
    // res.json({ })
    const id = req.params.id;
    users.update(req.body,{
      where: {id:id}
    })
    .then(data => {
      if(id){
        console.log(data)
        return res.send("Id updated successfully...");
      }
      else{
        res.status(404).send("Such an id doesn't exist...")
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Tutorial with id=" + id
      });
    
    })
})
       
   //// For Deleting a User... ////
   router.delete('/delete/:id', async (req, res) => {
    // res.json({ })
    let id = req.params.id;
    users.destroy({
      where: { id : id }
    })
    .then(data => {
      if(data){
        console.log(data)
        return res.send("Id deleted successfully...");
      }
      else{
        res.status(404).send("Such an id doesn't exist...")
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting user with id=" + id
      });
    
    })
})






module.exports = router