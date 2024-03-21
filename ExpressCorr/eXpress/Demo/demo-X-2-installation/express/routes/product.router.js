const productRouter = require('express').Router();

productRouter.route('/')
.get((req,res)=>{
    // res.writeHead(200, {
    //     "content-type" : "text/application/json"
    // })
    const data = {
        products : [
        {id: 1, name: "Patates"}
        ]
    }

    res.json(data)
})

productRouter.route('/:id')
.get((req,res)=>{
    res.status(200).send(`<h1>Détails sur le produit ${req.params.id}</h1>`)
})

module.exports = productRouter;