const express = require('express');
const route = express.Router();
const PhotosController = require('../../controllers/PhotosController');

//Photo Routes
route.get('/',PhotosController.list);
route.get('/:photoId',PhotosController.getOne);
route.post('/',PhotosController.create);
route.delete('/:photoId',PhotosController.deletePhoto);
route.put('/photoId',PhotosController.update);

module.exports =route;
