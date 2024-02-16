'use strict'

require('dotenv').config();

const express = require('express'), app = express();

// Variable Env
const PORT = process.env.PORT;

app.get('/',(req,res) => {
    console.log('Hello world !')
    res.send("Hello world !")
})











//  Server 
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} and url http://localhost:${PORT}`)
})