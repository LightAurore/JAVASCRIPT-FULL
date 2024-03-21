const homeRouter = require('./home.route');

const router = require('express').Router();

// Utilisation des sous-routeurs
router.use(homeRouter);

//  page 404
router.all("**", (req, res)=>{
    res.status(404).send('<h1>Page non trouvée </h1>')
})

module.exports = router;