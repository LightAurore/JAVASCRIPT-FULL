const mongoose = require('mongoose');

const prospectSchema = mongoose.Schema({
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
    },
    phone: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true,
        default: 'undefined'
    },
    company_email: {
        type: String,
        required: true,
        default: "customer"
    },
    company_numeric: {
        type: customerRole,
        required: true,
        default: {}
    },
}, {
    collection: 'Prospect',
    timestamps: true
});

const Prospect = mongoose.model('Prospect', prospectSchema);
module.exports = Prospect;
