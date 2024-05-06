
const advertRouter = require('express').Router();


  advertRouter.get('/advert', advertController.index);
  advertRouter.get('/advert/new', advertController.addNewAdvert);
  advertRouter.post('/advert/new', advertController.addNewAdvert_POST);
  advertRouter.get('/advert/detail/:slug', advertController.detail);


module.exports = advertRouter;