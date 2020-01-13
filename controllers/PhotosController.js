const list = (req, res) => {
    Photo.find({}, (err, photos) => {
        res.json(photos);
    });
};


const getOne = (req, res) => {
    Photo.findById(req.params.photoId, (err, photos) => {
        res.json(photos);
    });
};

const create = (req, res) => {
    const p = new Photo({
        title:req.body.title,
        credits:req.body.credits,
        url: req.body.url,
        sort: req.body.sort

    });
    p.save().then(() => {
        res.json({
            message: "Photo created"
        });
    });
};

const deletePhoto = (req, res) => {
    Photo.deleteOne({_id: req.params.photoId}, (err) => {
        res.json({
            message: "Photo Deleted"
        });
    });
};

const update = (req, res) => {
    Photo.updateOne({_id: req.params.photoId}, {
        title:req.body.title,
        credits:req.body.credits,
        url: req.body.url,
        sort: req.body.sort
    }, (err) => {
        res.json({
            message: "Photo Updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deletePhoto,
    update
};
