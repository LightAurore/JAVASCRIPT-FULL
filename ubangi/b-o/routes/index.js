const advertRouter = require('./advert.router');
const articleRouter = require('./article.router');
const customerRouter = require('./customer.router');
const homeRouter = require('./home.router');

const router = require('express').Router();

router.use(homeRouter);
router.use(customerRouter);
router.use(articleRouter);
router.use(advertRouter);


// Page 404
router.all("**", (req, res) => {
  res.status(404).send('<h1>Page non trouvé (っ °Д °;)っ </h1>')
})

module.exports = router;