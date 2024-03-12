const mongoose = require('mongoose');

// Définition du schema des données
<<<<<<< HEAD
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
=======
const commentSchema = new mongoose.Schema({
   message: {
      type: String,
      require: true,
      trim: true,
      minLength: 1,
      maxLength: 500,
   },
   author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
   rating:{
      type: Number,
      require: true,
      default: 0,
   },
   isVisible : {
      type: Boolean,
      require: true,
      default: false
   }
},
{
   timestamps: true,
})

// Définition du schema des données
const articleSchema = mongoose.Schema({ 
     title : {
        type: String,
        require: true,
        trim:true,
        minLength: 5
     },
     author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
     slug : {
        type: String,
        require: true,
        trim: true,
        unique:true
     },
     tag : [String],
     desc : {
        type: String,
        require: false,
        maxLength: 200
     },
     content: {
        type: String,
        require: true,
        trim:true,
        maxLength: 10
     },
     comments: [{
      type: commentSchema,
      default: []
     }]
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
}, {
    timestamps: true
});

const articleSchema = mongoose.Schema({
    title: {
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
    },
    comments: [{
        type: commentSchema,
        default: []
    }]
}, {
    collection: 'Article',
    timestamps: true
});

// Créer le model de données
const Article = mongoose.model('Article', articleSchema);

// Export du model « Article »
module.exports = Article;