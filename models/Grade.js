const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
  value: {
    type: Number,
    required: true,
    min: 0,
    max: 20  
  },

  comment: {
    type: String,
    trim: true
  },

  moduleItem: {
    type: Schema.Types.ObjectId,
    ref: 'ModuleItem',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Grade', GradeSchema);