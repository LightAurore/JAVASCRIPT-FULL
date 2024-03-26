const mongoose = require('mongoose');

// Définition du schema des données
// traduction
const traductionSchema = mongoose.Schema({
    langueEtrangere: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    },
    abbreviation: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 5
    },
    motEtranger : {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    }
}, 
{
    timestamps: true
});
// sens
const sensSchema = mongoose.Schema({
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
    pluriel : {
        type: String,
        trim: true,
        minLength: 1
    },
    origine: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    },
    sensContent: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 5
    },
    etymologie: {
        type: String,
        trim: true,
        minLength: 1
    },
    sensExemple: {
        type: String,
        required:true,
        trim: true,
        minLength: 10
    }
}, 
{
    timestamps: true
});
// antonyme
const antonymeSchema = mongoose.Schema({
    antonyme: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    }
}, 
{
    timestamps: true
});
// synonyme
const synonymeSchema = mongoose.Schema({
    synonyme: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    }
}, 
{
    timestamps: true
});
// prononciation
const prononciationSchema = mongoose.Schema({
    origine: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    },
    prononciation: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 50
    }
}, 
{
    timestamps: true
});

// mot
const motSchema = mongoose.Schema({
    // base
    mot : {
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

    // sous forme de commentaire
    // étape prononciation
    prononciations : [{
        type: prononciationSchema,
        default: []
    }],

    // étape synonyme
    synonymes : [{
        type: synonymeSchema,
        default: []
    }],

    // étape antonyme
    antonymes : [{
        type: antonymeSchema,
        default: []
    }],

    // étape sens
    sens : [{
        type: sensSchema,
        default: []
    }],

    // étape traduction
    traductions: [{
        type: traductionSchema,
        default: []
    }],

// étape data externes
/* 
    // étape
    citation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Citation',
        default: ''
    },

    // étape
    expression: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expression',
        default: ''
    },

    // étape
    proverbe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expression',
        default: ''
    }
*/
},
{
    collection: 'Mot',
    timestamps: true
});

const Mot = mongoose.model('Mot',motSchema);

module.exports = Mot;
