const testController = require('../controllers/test.controller');


const testRouter = require('express').Router();

testRouter.get('/cat/new', testController.addCat);
testRouter.post('/cat/new', testController.addCat_POST);

module.exports = testRouter;