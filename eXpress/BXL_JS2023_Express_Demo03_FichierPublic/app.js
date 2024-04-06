// Charger les variable d'env (Compatible Node v18+)
require('dotenv').config();

// Les imports
const express = require('express');
const homeRouter = require('./routes/home.router');
const personRouter = require('./routes/person.router');

// Création du WebServer
const app = express();

// Configuration du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Gestion du dossier public
// → Possibilité d'ajouter un prefix de route
app.use('/files', express.static('./public'));

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Routing
app.use(homeRouter);
app.use(personRouter);

// Lancer le WebServer
const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => {
    console.log(`WebServer is running on port ${PORT} (${NODE_ENV})`);
});