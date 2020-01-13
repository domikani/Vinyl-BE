const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

global.User = mongoose.model("User", {
    firstName: String,
    lastName: String,
    email: String
});

global.Product = mongoose.model("Product", {
    category: mongoose.Types.ObjectId,
    title: String,
    artist: String,
    recordLabel: String,
    type: String,
    releaseDate: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String
});

global.Category = mongoose.model("Category", {
    title: String
});

global.Department = mongoose.model("Department", {
    name: String,
    latitude: Number,
    longitude: Number

});

global.Photo=mongoose.model("Photo",{
    title:String,
    credits:String,
    url:String,
    sort:String
});

