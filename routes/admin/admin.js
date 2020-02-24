const express = require('express');
const route = express.Router();
const AdminAuth = require('../../middlewares/adminAuth');
const StatsController = require ("../../controllers/statscontroller");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});

route.get("/stats", AdminAuth, StatsController.dashboardStats);
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

route.post("/upload" +
    "" +
    "" +
    "" +
    "", upload.single('file'), (req, res) => {

    res.json({
        success: true,
        message: "File uploaded",
        filename: req.file.filename
    });
});


module.exports = route;
