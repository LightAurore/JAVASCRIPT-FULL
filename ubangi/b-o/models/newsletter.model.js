const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    newsletter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Référence à la collection Category
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isSubscribed: {
        type: Boolean,
        default: false
    },
    subscribed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer' // Référence à la collection Customer
        }
    ]
},{
  collection: 'Newsletter',
  timestamps: true
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
