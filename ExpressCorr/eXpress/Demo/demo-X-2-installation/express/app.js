const { PORT }= process.env;

const express = require("express"), app = express();

const morgan = require('morgan');


// middleware : App-Lv1  --------------
const applvlMiddleware = require('./middlewares/applvl.middleware');
const errorHandlerMiddleware = require("./middlewares/errorhandlelvl.middleware");
app.use(applvlMiddleware);


console.warn('https://developer.mozilla.org/en-US/docs/Web/HTTP/Status');

// middleware intégré
app.use(morgan('tiny'));

//   ----  Routing  ----
const routes = require("./routes");
app.use('/', routes);


// ----  Middleware ErrorHandler  ----
// il se met tout à la fin juste avant le listen(port)
app.use(errorHandlerMiddleware)


app.listen(PORT, ()=>{
    console.warn(`Serveur Express started on Port ${PORT} url http://localhost:${PORT}`);
})

// toml json yamal csv