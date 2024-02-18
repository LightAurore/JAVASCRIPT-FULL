const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

// Index
homeRouter.get('/', homeController.index);

// ContactMe
homeRouter.get('/contactme', homeController.contact);
homeRouter.post('/contactme', homeController.contactPost);


module.exports = homeRouter;