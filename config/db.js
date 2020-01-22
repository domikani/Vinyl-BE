const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//User  Model
const userSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password:{
        type:String,
        required:true,
        bcrypt:true
    }

});


userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);

global.Product = mongoose.model("Product", {
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
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

