'use strict';

// imports
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import morgan from 'morgan';
import mainRouter from './routes/index.js';

import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOptions from './swagger.options.js';

// Variables d'env
const { NODE_ENV, PORT } = process.env;




//! Create Web Api
// * Initialisation
const app = express();

// * Add swagger
expressJSDocSwagger(app)(swaggerOptions)

//* Middlewares
app.use(morgan(NODE_ENV === 'dev' ? 'dev' : 'tiny'));
app.use(express.json());

// ! TODO Routing

app.use('/api', mainRouter);


// * Launch Web Api
app.listen(PORT, ()=>{
    console.log(`Server running as ${NODE_ENV} on port http://localhost:${PORT}`);
});


