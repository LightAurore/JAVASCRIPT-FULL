const littController = require('../controllers/litt.controller');

const littRouter = require('express').Router()

littRouter.get('/litt', littController.index)


module.exports = littRouter;