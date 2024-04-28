const customerController = require('../controllers/customer.controller');


const customerRouter = require('express').Router();

customerRouter.get('/customer/register', customerController.register);
customerRouter.post('/customer/register', customerController.register_POST);

customerRouter.get('/customer/login', customerController.login);
customerRouter.post('/customer/login', customerController.login_POST);

customerRouter.get('/customer/logout', customerController.logout);

module.exports = customerRouter;