const express = require("express"), app = express();

const PORT = 8580;

const fs = require('fs');



// template
const pug = require('pug');
app.set('view engine', 'pug')


//
app.use('/css',express.static(__dirname +'/css'));  // ok
app.use('/img',express.static(__dirname +'/img'));  // ok



// files
app.get('/', (req,res)=>{
    res.send("hello")
})

app.get('/products', (req,res)=>{
    let products = JSON.parse(fs.readFileSync("./database/products.txt").toString());

    console.log(products);

    let productDetails = products.map((p)=>{
        console.log(p)
        return p.title
    })
    
    console.log(productDetails)
    res.send("Wait")
})

app.get('/products/:id', (req,res)=>{
    let products = JSON.parse(fs.readFileSync("./database/products.txt").toString());

    console.log(products);

    let productDetails = products.find((p)=>{
        if(p.id == req.params.id){
            return true;
        }
    })

    // variables
    const message = `
    <html>
    <head></head>
    <body>
        <h1>${productDetails.title}</h1>
        
    </body>
    </html>
    `
// <img src="${productDetails.image}" />

    res.status(200).send(
        message
    )
})


// server
app.listen(PORT, ()=>console.log(`Server started on port ${PORT} : http://localhost:${PORT}`))