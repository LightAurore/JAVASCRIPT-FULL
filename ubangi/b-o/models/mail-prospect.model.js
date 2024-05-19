const mongoose = require('mongoose');

const filesSchema = mongoose.Schema({
  title: String,
  content: String
})

const mailProspectSchema = mongoose.Schema({
    prospect_id: {
        type: String, // mongoose.Schema.Types.ObjectId,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    files: [
      {
        type: filesSchema,
        required: true
      }
    ],
    filess: [
      {
          name: {
              type: String
          },
          content: {
              type: Buffer // Binary large object (BLOB) data
          }
      }
  ]
}, {
    collection: 'MailProspect',
    timestamps: true
});

const MailProspect = mongoose.model('MailProspect', mailProspectSchema);
module.exports = MailProspect;
