const detailController = require("../controllers/detail.controller");

const detailRouter = require("express").Router();

detailRouter.get('/detail/:id',detailController.detail)


module.exports = detailRouter;