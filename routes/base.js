const express = require("express");
const route = express.Router();


// Home Route
route.get("/", (req, res) => {
        res.json({
            success: true,
            message: 'Home page'
        });
    }
);
route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));
route.use((req, res) => {
        return res.json({
            success: false,
            message: "I am sorry, page not found"
        })
    }
);
module.exports = route;
