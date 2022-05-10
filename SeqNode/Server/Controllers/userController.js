const db = require('../models');
const User= db.users;
require('../models/index')
const EventEmitter = require('node:events');

class userController extends EventEmitter{}

////// Applied on creation:
const myEmitter = new userController();
myEmitter.on('event', ()=>{
  console.log("You have added yourself in database officially. ")
})

////// Applied on fetching:
const urEmitter = new userController();
urEmitter.on('event', () => {
  console.log("All data is fetched from database.")
})

///// Applied for Updation: 
const upEmitter = new userController();
upEmitter.on('event', () => {
  console.log("User with specific ID has been updated")
})

///// Applied for Deletion: 
const delEmitter = new userController();
delEmitter.on('event', () => {
  console.log("User with specific ID has been deleted. ")
})

//// For Getting All users... ////
exports.findAll = async (req, res) => {
    // let gets = await users.findAll();
    //   console.log("Got all data.")
    //   return res.json(gets)
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;

//   var condition = (firstName, lastName, email) ? { firstName, lastName, email: { [Op.iLike]: `%${firstName, lastName, email}%` } } : null;
  User.findAll({  })
    .then(data => {
      res.send(data);
      console.log("Got all data.")

      /////// Emitting an event //////////
      urEmitter.emit('event');
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}

//// For Creating a User... ////
exports.create = (req, res) => {

    console.log("Creating new entry...");

    ///// Validation //////
    if (!(req.body.firstName )) {
          res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }
          // Create a User
        const tutorial = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        };
        // Save User in the database
        User.create(tutorial)
        .then(data => {
            res.send(data);
            console.log(tutorial)
            console.log("User created successfully...")

            /////// Emitting an event //////////
            myEmitter.emit('event')
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the User."
            });
        });
    }

    //// For Updating a User... ////
    exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body,{
      where: { id : id }
    })
    .then(data => {
      if(data == true){
        console.log(data)
        console.log("User updated");
        res.send("Id updated successfully...");
        
        /////// Emitting an event //////////
        upEmitter.emit('event');
      }
      else{
        res.status(404).send("Such an id doesn't exist...")
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Updating User with id=" + id
      });
    
    })
}

//// For Deleting a User... ////
exports.destroy = (req, res) => {
    const id = req.params.id;
    User.destroy({
      where: { id : id }
    })
    .then(data => {
      if(data){
        console.log(data)
        console.log("User Deleted")
        res.send("Id deleted successfully...");
        
        /////// Emitting an event //////////
        delEmitter.emit('event')
      }
      else{
        res.status(404).send("Such an id doesn't exist...")
        console.log(data)
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting user with id=" + id
      });
    
    })
}