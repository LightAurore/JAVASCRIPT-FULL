const contactController = require("../controllers/contact.controller");

const contactRouter = require("express").Router();

contactRouter.get('/contact', contactController.contact);

contactRouter.post('/contact', contactController.contactPost);

module.exports = contactRouter;