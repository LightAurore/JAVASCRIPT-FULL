const motDatacontroller = require('../datacontrollers/mot.datacontroller');


const motDatarouter = require('express').Router();

motDatarouter.get('/mot',motDatacontroller.index)



module.exports = motDatarouter;