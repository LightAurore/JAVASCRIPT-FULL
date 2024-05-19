const homeController = require('../controllers/home.controller');

// Créer un router pour la zone "home"
const homeRouter = require('express').Router();

// Définition de(s) route(s)
homeRouter.get('/', homeController.index);
homeRouter.get('/about', homeController.about);
homeRouter.get('/chat', homeController.chat);
homeRouter.get('/about', homeController.about);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/protected', homeController.protected);
homeRouter.get('/error404', homeController.error404);

// Export du router
module.exports = homeRouter;