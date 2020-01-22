const express = require('express'); //gia na boreso na ftiakso routes
const route = express.Router();
const UsersController = require("../../controllers/UsersController");


// User Routes
route.get("/", UsersController.list);
route.get("/:userId", UsersController.getOne);
route.post("/", UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route; //epistrefo kati
