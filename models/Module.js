const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  moduleItems: [{
    type: Schema.Types.ObjectId,
    ref: 'ModuleItem',
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', ModuleSchema);
