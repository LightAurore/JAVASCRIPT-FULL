const recetteController = require('../controllers/recette.controller');

const recetteRouter = require('express').Router();

recetteRouter.get('/liste/', recetteController.liste);
recetteRouter.get('/detail/:id', recetteController.detail);// ([a-zA-Z\d!@#$%^&*]+)

recetteRouter.get('/ajout/', recetteController.ajout);
recetteRouter.post('/ajout/', recetteController.ajout_POST);

recetteRouter.post('/recette/add-comment',recetteController.addCommentToRecipe_POST)



module.exports = recetteRouter;