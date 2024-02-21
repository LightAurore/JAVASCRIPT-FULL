const authController = require("../controllers/auth.controller");

const autRouter = require("express").Router();

autRouter.get("/register", authController.register);
autRouter.post("/register", authController.register_post);

autRouter.get("/login", authController.login);
autRouter.post("/login", authController.login_post);

autRouter.get("/logout", authController.logout);


module.exports = autRouter;

