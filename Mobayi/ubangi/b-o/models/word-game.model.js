const mongoose = require('mongoose');

const wordGameSchema = new mongoose.Schema({
    game_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    game_name: {
        type: String,
        required: true
    },
    level: [
        {
            level_id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            level_name: {
                type: String,
                required: true
            },
            step: {
                type: Number,
                required: true
            }
        }
    ],
    players: [
        {
            player_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer' // Référence à la collection Customer
            },
            player_name: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            best: {
                score: Number,
                level: Number,
                difficulty: String
            },
            last: {
                score: Number,
                level: Number,
                difficulty: String
            }
        }
    ]
},
{
  collection: 'wordGame',
  timestamps: true
});

const WordGame = mongoose.model('WordGame', wordGameSchema);

module.exports = WordGame;
