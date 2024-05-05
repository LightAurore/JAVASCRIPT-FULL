const customerController = require('../controllers/customer.controller');


const customerRouter = require('express').Router();

const regex = "*[a-zA-Z_0-9]"
const regex2 = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$"


// Register
customerRouter.get('/customer/register', customerController.register);
customerRouter.post('/customer/register', customerController.register_POST);

// Login
customerRouter.get('/customer/login', customerController.login);
customerRouter.post('/customer/login', customerController.login_POST);

// Logout
customerRouter.get('/customer/logout', customerController.logout);


//Customer
customerRouter.get('/customer/all',customerController.getAll);
customerRouter.get('/customer/:id',customerController.getOneById);

customerRouter.get('/favour/:id',customerController.toggleRole);
customerRouter.get('/hide/:id',customerController.hidden);
customerRouter.get('/ban/:id',customerController.banned);

// Casting
customerRouter.get('/casting/customer',customerController.addRole);
customerRouter.post('/casting/customer',customerController.addRole_POST);

module.exports = customerRouter;