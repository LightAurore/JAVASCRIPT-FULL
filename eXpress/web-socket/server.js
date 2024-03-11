require('dotenv').config();

//! Web socket 

const http = require('node:http');
const app = require('./app-server');
const createIoServer = require('./app-socket')

//! Create Web server (+ Express)
const server = http.createServer(app);

//! TODO : Add socket.io
createIoServer(server);

//? Start Web server
const { PORT, NODE_ENV } = process.env;

server.listen(process.env.PORT || 3000, ()=>{
    console.log(`Web server is running in ${NODE_ENV} mode on http://localhost:${PORT}`)
});