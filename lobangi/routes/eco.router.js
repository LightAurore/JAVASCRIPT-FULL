const ecoController = require('../controllers/eco.controller');


const ecoRouter = require('express').Router();

ecoRouter.get('/eco', ecoController.index);

module.exports = ecoRouter;