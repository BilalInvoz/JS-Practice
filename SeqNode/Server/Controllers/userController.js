const db = require('../models');
const User= db.users;
require('../models/index')



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
        User.create(tutorial)
        .then(tutorial => {
            res.send(tutorial);
            console.log(tutorial)
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
      where: {id:id}
    })
    .then(data => {
      if(id != id){
        console.log(data)
        console.log("User updated");
        return res.send("Id updated successfully...");
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
}