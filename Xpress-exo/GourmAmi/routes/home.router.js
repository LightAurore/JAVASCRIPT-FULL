const homeController = require('../controllers/home.controller');

const homeRouter = require('express').Router();

homeRouter.get('/dashboard', homeController.dashboard);
homeRouter.get('/', homeController.index);
homeRouter.get('/about', homeController.about);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/chat', homeController.chat);

module.exports = homeRouter;