// Construction de notre routeur

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send("<h1> Yo </h1>");
})


//  users
const userRouter = require('./user.router');
router.use('/users?', userRouter);

// products
const productRouter = require('./product.router');
router.use('/products', productRouter);


// route qui n'est pas défini, mettre à la fin, le ** signifie "si aucune des routes "
router.get('**', (req, res)=>{
    res.send(`<h1>cette route n'existe pas</h1>`);
})


module.exports = router;