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
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");
const DepartmentsController = require("./controllers/DepartmentsController");
const PhotosController = require("./controllers/PhotosController");


// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.send("OK");
});

//Gallery?
app.get("/home",(req,res) =>{
    res.json(home);
});

//contact
app.get("/contact",(req,res) =>{
    res.json(contact);
});


// User Routes
app.get("/users", UsersController.list);
app.get("/users/:userId", UsersController.getOne);
app.post("/users", UsersController.create);
app.delete("/users/:userId", UsersController.deleteUser);
app.put("/users/:userId", UsersController.update);

// Product Routes
app.get("/products", ProductsController.list);
app.get("/products/:productId", ProductsController.getOne);
app.get("/products/cart", ProductsController.listCart);
app.post("/products", ProductsController.create);
app.delete("/products/:productId", ProductsController.deleteProduct);
app.put("/products/:productId", ProductsController.update);
app.get("/products/category/:categoryId", ProductsController.listByCategory);

// Category Routes
app.get("/categories", CategoriesController.list);
app.get("/categories/:categoryId", CategoriesController.getOne);
app.post("/categories", CategoriesController.create);
app.delete("/categories/:categoryId", CategoriesController.deleteCategory);
app.put("/categories/:categoryId", CategoriesController.update);

//Department Routes
app.get("/departments", DepartmentsController.list);
app.get("/departments/:departmentId", DepartmentsController.getOne);
app.post("/departments", DepartmentsController.create);
app.delete("/departments/:departmentId", DepartmentsController.deleteDepartment);
app.put("/departments/:departmentId", DepartmentsController.update);

//Photo Routes
app.get("/photos", PhotosController.list);
app.get("/photos/:photoId", PhotosController.getOne);
app.post("/photos", PhotosController.create);
app.delete("/photos/:photoId", PhotosController.deletePhoto);
app.put("/photos/:photoId", PhotosController.update);


