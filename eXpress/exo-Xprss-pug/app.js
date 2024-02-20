const contactRouter = require("./routes/contact.router");
const destinationRouter = require("./routes/destination.router");
const detailRouter = require("./routes/detail.router");
const homeRouter = require("./routes/home.router");
const confirmMsgRouter = require("./routes/msgconfirm.router");

require("dotenv").config();

const express = require("express"), app = express();



// Module static
app.use(express.static("public"));

// ____________________________

// templating
app.set('view engine', 'pug')
app.set('views', './views')
// ____________________________


// - Gestion des données de formulaire (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// ____________________________

// 
// app.get('/', (req,res) =>{
    
//     res.status(200).send("Hello world");
// })
//Routing
app.use(homeRouter);
app.use(destinationRouter);
app.use(detailRouter);
app.use(contactRouter);
app.use(confirmMsgRouter)
// ____________________________


// Routing
// app.use(routes);
// ____________________________


// Webserver
const { NODE_ENV, PORT } = process.env;
app.listen(PORT, ()=>{
    console.log(`Webserver running at http://localhost:${PORT} ${NODE_ENV}`)
})