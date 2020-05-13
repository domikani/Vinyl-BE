const mongoose = require('mongoose');
const list = async (req, res) => {
    const products = await Product
        .find({})
        .populate("category")
        .exec();
    await res.json({
        success: true,
        products: products
    });


};

const getProducts = async (req, res) => {
    const product = await Product.findById(req.params.productId).exec();
    return res.json({
        success: true,
        product: product
    });
};

const listByCategory = async (req, res) => {
    const products = await Product
        .find({category: req.params.categoryId})
        .exec();
    res.json({
        success: true,
        products: products
    });
};

const getOne = async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.productId)) {
        const product = await Product
            .findById(req.params.productId)
            .populate("category")
            .exec();
        res.json(product);

    } else {
        res.json({
            message: 'Product not found'
        });
    }


};

const create = async (req, res) => {
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        artist: req.body.artist,
        recordLabel: req.body.recordLabel,
        type: req.body.type,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.filename,
    });
    await p.save();
    res.json({
        message: "Product created"
    });

};

const deleteProduct = async (req, res) => {
    await Product
        .deleteOne({_id: req.params.productId})
        .exec();

    res.json({message: "Product Deleted"});

};

const update = (req, res) => {
    Product.updateOne({_id: req.params.productId}, {
        category: req.body.category,
        title: req.body.title,
        artist: req.body.artist,
        recordLabel: req.body.recordLabel,
        type: req.body.type,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo,
        gallery: req.body.gallery
    }, (err) => {
        res.json({
            success: true,
            message: "Product Updated"
        });
    });
};

const listCart = async (req, res) => {
    const products = await Product.find({_id: req.body.productIds}, "title price photo").exec();
    return res.json(products);
};

module.exports = {
    list,
    listByCategory,
    getOne,
    create,
    deleteProduct,
    update,
    listCart,
    getProducts
};
