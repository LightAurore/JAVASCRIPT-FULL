const mongooose = require('mongoose');

const memberSchema = mongooose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
<<<<<<< HEAD
        required: true
    }
}, {
    collection: 'Member',
=======
        require: true
    }
    
},
{
    collection: "Member",
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
    timestamps: true
});

const Member = mongooose.model('Member', memberSchema);
module.exports = Member;
