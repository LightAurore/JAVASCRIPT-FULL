const mongoose = require('mongoose');


// traductions
const proverbeSchema = mongoose.Schema({
    expressionId: {
        type: String,
        required:true,
        trim: true,
        minLength: 1

    },
    source: {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },
    contenu: {
        type: String,
        required:true,
        trim: true,
        minLength: 1
    },
},
{
    collection: 'Proverbe',
    timestamps: true
}
);

const Proverbe = mongoose.model('Proverbe',proverbeSchema);

module.exports = Proverbe;