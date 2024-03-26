const mongoose = require('mongoose');


// traductions
const citationSchema = mongoose.Schema({
    citationId: {
        type: String,
        trim: true,
        unique: true
    },
    auteur: {
        type: String,
        required: true
    },
    contenu: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    },
    contexte: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    },
    date: {
        type: String,
    },
},
{
    collection: 'Citation',
    timestamps: true
}
);

const Citation = mongoose.model('Citation',citationSchema);

module.exports = Citation;