const mongoose = require('mongoose');


const memberSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim:true,
        minLength: 3
    },
    firstname: {
        type: String,
        require: true,
        trim:true,
        minLength: 1
    },
    lastname: {
        type: String,
        require: true,
        trim:true,
        minLength: 1
    },
    password: {
        type: String,
        require: true,
        trim:true,
        minLength: 5
    },
    collection: 'Member',
    timestamp: true
})


const Member = mongoose.model('Member', memberSchema);
module.exports = Member;