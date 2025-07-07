const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },

  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', ModuleSchema);
