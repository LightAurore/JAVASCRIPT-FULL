const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  role_name: {
    type: String,
    required: true
  }
},{
  collection: 'Caste',
  timestamps: true
});

// Créer le model de données
const Caste = mongoose.model('Caste', roleSchema);

// Export du model « caste »
module.exports = Caste;