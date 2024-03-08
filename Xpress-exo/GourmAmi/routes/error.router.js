const errorController = require('../controllers/error.Controller');

const errorRouter = require('express').Router();

errorRouter.get('**',errorController.error404);

module.exports = errorRouter;