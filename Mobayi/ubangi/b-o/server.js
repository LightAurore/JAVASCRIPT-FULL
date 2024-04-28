require("dotenv").config();

//! Imports
const http = require('node:http');
const app = require('./app-server');
const createIoServer = require('./app-socket');

//! Create Web server (+ Express)
const server = http.createServer(app);

//! Ajout des WebSocket sur le serveur
createIoServer(server);

//? Start Web server
const { PORT, NODE_ENV } = process.env;

// Connexion à la base de donnée MongoDB
connectDb();


app.listen(PORT, ()=>{
    console.log(`The server listen as [mode: ${NODE_ENV}] on http://localhost:${PORT}`);
})