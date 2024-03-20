const magController = require('../controllers/mag.controller');

const magRouter = require('express').Router();

magRouter.get('/mag', magController.index)

module.exports = magRouter;