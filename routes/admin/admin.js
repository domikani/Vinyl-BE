const express = require('express');
const route = express.Router();
const AdminAuth = require('../../middlewares/adminAuth');

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});

route.get("/stats", AdminAuth, async (req, res) => {
    const categories = await Category.find().exec();
    const labels = categories.map( c => c.title);
    const counts = [];

    for (let cat of categories){
        const num= await Product.count({category:cat._id});
        counts.push(num);
    }

    res.json({
        success: true,
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My categories dataset',
                    data: counts
                }
            ]
        }
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
