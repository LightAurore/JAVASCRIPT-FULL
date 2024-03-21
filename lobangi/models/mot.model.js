const mongoose = require('mongoose');

const motSchema = mongoose.Schema({
    mot : {
        type: String,
    },
    classe : {
        type: '',
    },
    forme : {
        type: '',
    },
    genre : {
        type: '',
    },
    nombre : {
        type: '',
    },
    phonetique : {
        type: '',
    },
    prononciation : {
        type: '',
    },
    etymologie : {
        type: '',
    },
    synonyme : {
        type: '',
    },
    contraire : {
        type: '',
    },
    sens : {
        type: '',
    },
    exemple : {
        type: '',
    },
    traduction: {
        type: '',
    },
    citation: {
        type: '',
    },
    expression: {
        type: ' ',
    },
    proverbe: {
        type: '',
    }
}) 
