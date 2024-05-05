const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    article_id: {
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
        ref: 'Customer' // Référence à la collection Customer
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
    isVisible: {
        type: Boolean,
        default: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer' // Référence à la collection Customer
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer' // Référence à la collection Customer
        }
    ],
    reporters: [
        {
            reporter_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Report_Raison' // Référence à la collection Report_Raison
            },
            customer_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer' // Référence à la collection Customer
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    comments: [
        {
            comment_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            content: {
                type: String
            },
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer' // Référence à la collection Customer
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            updatedAt: {
                type: Date,
                default: Date.now
            },
            likes: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Customer' // Référence à la collection Customer
                }
            ],
            dislikes: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Customer' // Référence à la collection Customer
                }
            ],
            reporters: [
                {
                    reporter_id: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Customer' // Référence à la collection Customer
                    },
                    customer_id: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Customer' // Référence à la collection Customer
                    },
                    createdAt: {
                        type: Date,
                        default: Date.now
                    }
                }
            ],
            isPublished: {
                type: Boolean,
                default: false
            },
            isVisible: {
                type: Boolean,
                default: true
            }
        }
    ]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
