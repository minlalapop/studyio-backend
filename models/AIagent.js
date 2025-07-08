const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AIagentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['task_plan', 'summary', 'notification', 'alert'],
    required: true
  },
  data: {
    type: Schema.Types.Mixed,
    required: true
  },
  message: {
    type: String, // résumé ou conseil généré par l'AI
    required: true
  },
  read: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true 
});


module.exports = mongoose.model('AIagent', AIagentSchema);
