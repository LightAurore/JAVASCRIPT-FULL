const homeController = require('../controllers/home.controller');

// Créer un router pour la zone "home"
const homeRouter = require('express').Router();

// Définition de(s) route(s)
homeRouter.get('/', homeController.index);

// Export du router
module.exports = homeRouter;