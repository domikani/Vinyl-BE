const express = require('express'); //gia na boreso na ftiakso routes
const route = express.Router();
const UsersController = require("../../controllers/UsersController");
const UsersValidator = require("../../validators/UsersValidator");


// User Routes
route.get("/", UsersController.list);
route.get("/:userId", UsersValidator.getOne, UsersController.getOne);
route.post("/", UsersValidator.create , UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route; //epistrefo kati
