// Article.js

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    // Define your schema fields here (as per the provided schema)
    // For example:
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    // ... other fields ...
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
