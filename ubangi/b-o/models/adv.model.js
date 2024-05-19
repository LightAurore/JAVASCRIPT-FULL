const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
    advert_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    theme: {
        type: String
    },
    images: [
        {
            img_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            img_url: {
                type: String
            },
            alt: {
                type: String
            }
        }
    ],
    content: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' // Reference to the Customer collection
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer' // Reference to the Customer collection
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer' // Reference to the Customer collection
        }
    ],
    reporters: [
        {
            reporter_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Report_Raison' // Reference to the Report_Raison collection
            },
            customer_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer' // Reference to the Customer collection
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
