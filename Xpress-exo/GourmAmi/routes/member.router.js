const memberController = require('../controllers/member.controller');

const memberRouter = require('express').Router();

memberRouter.get('/login', memberController.login);

memberRouter.post('/login', memberController.login_POST);

memberRouter.get('/logout',memberController.logout);

memberRouter.get('/register', memberController.register);

memberRouter.post('/register', memberController.register_POST);

memberRouter.get('/profil', memberController.profil);

memberRouter.get('/notice', memberController.notice);

module.exports = memberRouter;