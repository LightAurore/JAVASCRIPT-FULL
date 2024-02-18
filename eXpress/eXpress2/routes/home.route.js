const homeController = require('../controllers/home.controller');

const homeRouter = require('express').Router();

// index
homeRouter.get('/', homeController.index);

// contact
homeRouter.get('/contactme', homeController.contact);
homeRouter.post('/contactme', homeController.contactPost);

module.exports = homeRouter;