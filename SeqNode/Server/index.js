const { Sequelize } = require('sequelize');
const express = require('express')
const cors = require('cors')
let bodyParser = require('body-parser')
let port = 8000
const path = require('path')
// require('./models/index')
// let router = require('./Routes/userRoute')

const sequelize = new Sequelize('pglinux', 'postgres', 'Bilalshahid786', {
    host: 'localhost',
    dialect: 'postgres'
});

//     // console.log(sequelize);

//     // let fun = async () => {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    // // // fun()
    //     // }
    // app.listen(port)
    
    // let rout = require('./Routes/userRoute');
    let app = express();
    app.use(express.json());
    app.use(cors());

    require('./Controllers/userController')
    let runt = require('./Routes/userRoute');
    app.use('/user', runt);


    app.listen(port, function () {
        console.log("Example app listening at http://localhost:8000")
    })
    // console.log(rout)

    // router.get('/user', async (req, res) => {
    //     // res.json({ })
    //     let getting = await users.findAll()
    //     console.log("Data", getting)
    //   })

 ////// User Route 1:  //////////
//  app.use('/user', usrt);

// module.exports = app;