const mongoose = require('mongoose');

const motSchema = mongoose.Schema({
    // base
    mot : {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },
    classe : {
        type: String,
        required:true,
        trim: true,
        maxLength: 20
    },
    forme : {
        type: String,
        required:true,
        trim: true,
        maxLength: 20
    },
    genre : {
        type: String,
        required:true,
        trim: true,
        maxLength: 20
    },
    nombre : {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },
    phonetique : {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },

    // étape
    prononciation : [{
        type: String,
    }],
    // étape
    etymologie : [{
        type: String,
    }],
    // étape
    synonyme : [{
        type: String,
    }],
    // étape
    contraire : [{
        type: String,
    }],
    // étape
    sens : [{
        type: String,
        required:true,
        trim: true,
        minLength: 1
    }],
    exemple : {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },


    // étape data externes
    traductions: {
        type: traductionSchema,
        default: []
    },
    // étape
    citation: {
        type: citationSchema,
        default: []
    },

    // étape
    expression: {
        type: expressionSchema,
        default: []
    },
    // étape
    proverbe: {
        type: proverbeSchema,
        default: []
    }
},
{
    collection: 'Mot',
    timestamps: true
}

) 

const Mot = mongoose.model('Mot',motSchema);

module.exports = Mot;
