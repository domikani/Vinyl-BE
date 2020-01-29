const express = require('express');
const route = express.Router();
const AdminAuth = require('../../middlewares/adminAuth');

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});
//User
route.use("/auth", require('./auth'));

//route.use(AdminAuth); //gia na valo authorization sta routes mou etsi oste na min borei na bei kapoios stin tuxi.
//prepei na to grapso an thelo na exo authentication se ena route apo pano
//apo to route
route.use("/users", AdminAuth, require('./users'));

// Product Routes
route.use("/products", AdminAuth, require('./products'));

// Category Routes
route.use("/categories", AdminAuth, require('./categories'));

//Department Routes
route.use("/departments", AdminAuth, require('./departments'));


module.exports = route;
