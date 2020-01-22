const express = require('express');
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");

route.get("/", CategoriesController.list);
route.get("/:categoryId", CategoriesController.getOne);
route.post("/", CategoriesController.create);
route.delete("/:categoryId", CategoriesController.deleteCategory);
route.put("/:categoryId", CategoriesController.update);

module.exports = route;
