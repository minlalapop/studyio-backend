const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AIagentSchema = new Schema({
// 
user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false 
  },

  // Exemple de préférences ou historique (à adapter selon besoins)
  preferences: {
    type: Object,
    default: {}
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('AIagent', AIagentSchema);
