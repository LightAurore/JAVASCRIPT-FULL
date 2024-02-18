const homeRouter = require('./home.router');


const router = require('express').Router();

// Utilisation des sous-routeurs
router.use(homeRouter);

// Page 404
router.all("**", (req, res) => {
    res.status(404).send('<h1>Page non trouvé (っ °Д °;)っ </h1>')
})

module.exports = router;