const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Admin Area");
});
//User
route.use("/auth", require('./auth'));

route.use("/users", require('./users'));

// Product Routes
route.use("/products", require('./products'));

// Category Routes
route.use("/categories", require('./categories'));

//Department Routes
route.use("/departments", require('./departments'));


module.exports = route;
