const mongoose = require('mongoose');


// traductions
const expressionSchema = mongoose.Schema({
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
    collection: 'Expression',
    timestamps: true
}
);

const Expression = mongoose.model('Expression',expressionSchema);

module.exports = Expression;