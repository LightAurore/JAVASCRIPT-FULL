const mongooose = require('mongoose');

const customerSchema = mongooose.Schema({
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
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'Customer',
    timestamps: true
});

const Customer = mongooose.model('Customer', customerSchema);
module.exports = Customer;
