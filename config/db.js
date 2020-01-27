const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

//sundeoume thn vasi
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//User  Model
const userSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            bcrypt: true
        }
    },
    {
        timestamps: true

    });


global.User = mongoose.model("User", userSchema);
userSchema.plugin(bcrypt);

//Product Model

const productSchema = mongoose.Schema({
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String

        },
        recordLabel: {
            type: String

        },
        releaseDate: {
            type: String
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        sale: {
            type: Number
        },
        photo: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);
global.Product = mongoose.model("Product", productSchema);

//Category Model

const categorySchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

global.Category = mongoose.model('Category', categorySchema);

//Department Model

const departmentSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

global.Department = mongoose.model("Department", departmentSchema);

//Photo model

const photoSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    credits:{
        type:String,
        required:true
    },
    title:{
        type:String
    },
    sort:{
        type:String
    }
},{
    timestamps:true
});
global.Photo = mongoose.model("Photo",photoSchema );
