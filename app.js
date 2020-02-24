// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();
const home = require ('./home.json')
const contact = require ('./contact.json')

// Require MongoDB connection and Models
require("./config/db");
require("./config/multer");

// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/uploads", express.static('uploads'));


//Gallery?
app.get("/home",(req,res) =>{
    res.json(home);
});
//contact
app.get("/contact",(req,res) =>{
    res.json(contact);
});

//Import Application Routes
app.use(require('./routes/base'));
