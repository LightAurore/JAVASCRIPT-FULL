
// construction de notre routeur :
const router = require("express").Router();

// Exemple première route :
router.get("/", (req, res) => {
    res.send("<h1> Yo </h1>");
})

// import des routers enfants
const userRouter = require("./user.router");
const productRouteur = require("./product.router");
// utilisation des routeurs enfants
router.use('/users?', userRouter);
router.use('/products?', productRouteur)

// A mettre à la fin, le ** signifie "si aucune des routes existantes dans l'app"
router.get("**", (req, res) => {
    res.send("<h1>Cette route n'existe pas</h1>")
})

module.exports = router;