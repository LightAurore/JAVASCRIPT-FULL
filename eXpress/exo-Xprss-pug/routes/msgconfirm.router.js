const msgConfirmationController = require("../controllers/msgconfirm.controller");

const confirmMsgRouter = require("express").Router();

confirmMsgRouter.get('/confimer',msgConfirmationController.confirmationMsg)

module.exports = confirmMsgRouter;