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
            err.message || "Some error occurred while creating the Tutorial."
          });
        });
        // return res.send();
      })
    router.get('/', async (req, res) => {
      // res.json({ })
      let gets = await users.findAll();
      console.log("Got all data.")
      return res.json(gets)
  })

module.exports = router