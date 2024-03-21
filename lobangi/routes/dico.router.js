const dicoController = require('../controllers/dico.controller');


const dicoRouter = require('express').Router();

dicoRouter.get('/dico', dicoController.index);
dicoRouter.post('/dico', dicoController.addWord);



module.exports = dicoRouter;