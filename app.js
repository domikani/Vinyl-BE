// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();
const home = require ('./home.json')
const contact = require ('./contact.json')

// Require MongoDB connection and Models
require("./config/db");

// Require Controllers
const PhotosController = require("./controllers/PhotosController");


// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Gallery?
app.get("/home",(req,res) =>{
    res.json(home);
});

//contact
app.get("/contact",(req,res) =>{
    res.json(contact);
});

//User
app.use("/users", require('./routes/admin/users'));

// Product Routes
app.use("/products", require('./routes/admin/products'));

// Category Routes
app.use("/categories", require('./routes/admin/categories'));

//Department Routes
app.use("/departments", require('./routes/admin/departments'));

//Photo Routes
app.get("/photos", PhotosController.list);
app.get("/photos/:photoId", PhotosController.getOne);
app.post("/photos", PhotosController.create);
app.delete("/photos/:photoId", PhotosController.deletePhoto);
app.put("/photos/:photoId", PhotosController.update);

//Import Application Routes
app.use(require('./routes/base'));
