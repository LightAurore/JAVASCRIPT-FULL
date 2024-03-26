const motController = require('../controllers/mot.controller');


const motRouter = require('express').Router();

motRouter.get('/mot',motController.index);

motRouter.get('/mot/all',motController.getAllWords);

motRouter.get('/mot/new',motController.addWord);
motRouter.post('/mot/new',motController.addWord_POST);

// motRouter.get('/mot/def',motController.addWordMeaning);
motRouter.post('/mot/def',motController.addWordMeaning_POST);

// motRouter.get('/mot/syno',motController.addWordSynonyme);
motRouter.post('/mot/syno',motController.addWordSynonyme_POST);

// motRouter.get('/mot/anto',motController.addWordAntonyme);
motRouter.post('/mot/anto',motController.addWordAntonyme_POST);

// motRouter.get('/mot/prono',motController.addWordPrononciation);
motRouter.post('/mot/prono',motController.addWordPrononciation_POST);

// motRouter.get('/mot/trad',motController.addWordTranslation);
motRouter.post('/mot/trad',motController.addWordTranslation_POST);


motRouter.get('/mot/:id([0-9]+)',motController.getWord);


module.exports = motRouter;