const mongoose = require('mongoose');


// traductions
const exSchema = mongoose.Schema({
    lingala:{
        type: String,
        trim: true,
        minLength: 1,
        unique: true
    }
},
{
    collection: 'Ex',
    timestamps: true
}
);

const Ex = mongoose.model('Ex',motSchema);

module.exports = Ex;