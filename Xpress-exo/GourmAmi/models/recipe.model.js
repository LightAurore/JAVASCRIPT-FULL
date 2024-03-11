const mongoose = require('mongoose');

// Définition du schema
const commentSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 500
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    rating : {
        type: Number,
        required: true,
        default: 0,
    },
    isVisible : {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

const recipeSchema = mongoose.Schema({
    recipename: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    tag: [String],
    recipeimg: {
        type: String,
        trim: true,
        minLength: 5
    },
    recipeshortdesc: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    recipedesc: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
    },
    comments: [{
        type: commentSchema,
        default: []
    }],
    ingredient: [{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    }],
    step: [{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    }],

}
, {
    collection: 'Recipe',
    timestamps: true
}
)

// Créer le model de données
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export du model « Recipe »
module.exports = Recipe;