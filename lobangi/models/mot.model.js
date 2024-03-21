const mongoose = require('mongoose');


const motSchema = mongoose.Schema({
    mot: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },

    genre:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },

    nombre:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    classe:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },

    fonction:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },

    type:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    
    definitions:[{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    }],
    
    synonymes:[{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    }],
    
    classe:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },

},

{
    collection: 'Mot',
    timestamps: true
})

// Créer le modèle de données
const Mot = mongoose.model('Mot', motSchema);

// Exporter le modèle de données "Mot"
module.exports = Mot;