const mongoose = require('mongoose');


// traductions
const traductionSchema = mongoose.Schema({
    lingala:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    kingbandi:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    tshiluba:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    kikongo:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    kiswahili:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    francais:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    },

    anglais:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    }
},
{
    collection: 'Trad',
    timestamps: true
}
);

const Trad = mongoose.model('Trad',traductionSchema);

module.exports = Trad;