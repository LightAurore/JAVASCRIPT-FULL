const homeController = require('../controllers/home.controller');

<<<<<<< HEAD

=======
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);


module.exports = homeRouter;