const destinationController = require("../controllers/destination.controller");

const destinationRouter = require("express").Router();

destinationRouter.get('/destination', destinationController.destination);

module.exports = destinationRouter;