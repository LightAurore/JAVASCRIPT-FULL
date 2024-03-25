const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    id: Number,
    name: String
},
{
    collection: 'Cat',
    timestamps: true
}
)

const Cat = mongoose.model('Cat', testSchema)

module.exports = Cat;