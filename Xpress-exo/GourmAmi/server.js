require('dotenv').config();
// Récupération de variables ".env"
const { PORT, NODE_ENV, SESSION_SECRET } = process.env;

// Imports
const http = require('node:http');
const app = require('./app-server');
const createIoServer = require('./app-socket');


//! Create Web server (+ Express)
const server = http.createServer(app);

//! Ajout de WebSocket sur le serveur
createIoServer(server); 

// Server running
server.listen(PORT, ()=>{
    console.log(`Server running as ${NODE_ENV} at http://localhost:${PORT}`);
})

