const mongoose = require("mongoose")

// Définition du schema des données
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
}, {
    collection: "Article",
    timestamps: true
})
// Timestamps gère automatiquement la date (création et modification) 

// Créer le model de données (nom du model et nom du schema)
const Article = mongoose.model("Article", articleSchema);

// Export du model " Article "
module.exports = Article;

// 

