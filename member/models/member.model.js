const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    firstname: {
        type: String,
        minLength: 1,
        trim: true
    },
    lastname: {
        type: String,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    collection: 'Member',
    timestamps: true
}
)

const Member = mongoose.model('Member', memberSchema)
module.exports = Member;