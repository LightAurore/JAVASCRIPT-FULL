
const homeController = require('../controllers/home.controller.js');

const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index )


module.exports = homeRouter;