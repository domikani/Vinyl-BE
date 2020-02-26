const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");
const ProductsController = require("../../controllers/ProductsController");

route.use("/auth", require("./auth"));

route.get("/categories", CategoriesController.list);
route.get("/categories/:categoryId", CategoriesController.getProductByCategory);
route.get("/products", ProductsController.list);
route.get("/product/:productId",ProductsController.getProducts)

module.exports = route;
