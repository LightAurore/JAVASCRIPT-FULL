const mongoose = require('mongoose');

const advertSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    tag: [String],
    desc: {
        type: String,
        required: false,
        maxLength: 200
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    }
}, {
    collection: 'Advert',
    timestamps: true
});

// Créer le model de données
const Advert = mongoose.model('Advert', advertSchema);

// Export du model « advert »
module.exports = Advert;