// Example usage in a controller

const Article = require('./Article'); // Adjust the path to your Article model

// Create a new article
const newArticle = new Article({
    title: 'Sample Article',
    slug: 'sample-article',
    // ... other fields ...
});

// Save the article to the database
newArticle.save()
    .then((savedArticle) => {
        console.log('Article saved:', savedArticle);
    })
    .catch((err) => {
        console.error('Error saving article:', err);
    });
