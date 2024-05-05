const mongoose = require('mongoose');

const reasonSchema = mongoose.Schema({
  "reason" : string,
  "gravity": string
})

const reportReasonSchema = mongoose.Schema({
    description: {
        type: reasonSchema,
        required: true
    },
    descriptions: {
        reason: {
            type: String,
            required: true
        },
        gravity: {
            type: String
        }
    }
}, {
    collection: 'ReportReason',
    timestamps: true
});

const ReportReason = mongoose.model('ReportReason', reportReasonSchema);
module.exports = ReportReason;
