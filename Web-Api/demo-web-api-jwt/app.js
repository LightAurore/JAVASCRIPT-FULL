'use strict';

import 'dotenv/config';


// Imports
import express from 'express';
import morgan from 'morgan';
import mainRouter from './routes/index.js';
import { authTokenMiddleware } from './middlewares/authentification.middleware.js';

// Variables env.
const {NODE_ENV, PORT }= process.env;

// Web Api
// * Initialisation 
const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(authTokenMiddleware());

// Routing
app.use('/api',mainRouter);


// * Start
app.listen(PORT, ()=>{
    console.log(`Web API is running as ${NODE_ENV} on http://localhost:${PORT}`);
})