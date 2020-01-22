const express = require('express');
const route = express.Router();
const ProductsController = require("../../controllers/ProductsController");

//Products Routes
route.get("/", ProductsController.list);
route.post("/cart", ProductsController.listCart);
route.get("/:productId", ProductsController.getOne);
route.post("/", ProductsController.create);
route.delete("/:productId", ProductsController.deleteProduct);
route.put("/:productId", ProductsController.update);
route.get("/category/:categoryId", ProductsController.listByCategory);

module.exports = route;
