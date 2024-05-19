const mongoose = require('mongoose');

const customerRole = mongoose.Schema({
    isBanned: {
        type: Boolean,
        required: true,
        default: false
    },
    reason: {
        type: String,
        required: true,
        default: 'null'
    }
}, {
    timestamps: true
})

const customerSchema = mongoose.Schema({
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
    img_url: {
        type: String,
        required: true,
        trim: true,
        default: 'avatar'
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    domain_expert: {
        type: String,
        required: true,
        trim: true,
        default: 'undefined'
    },
    role: {
        type: String, // mongoose.Schema.Types.ObjectId,
        required: true,
        default: "customer"
    },
    banned: {
        type: customerRole,
        required: true,
        default: {}
    },
    isHidden: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    collection: 'Customer',
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
