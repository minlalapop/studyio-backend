const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SummarySchema = new Schema({
  content: {
    type: String,
    required: true
  },

  format: {
    type: String,
    enum: ['PDF', 'DOCX'],
    required: true
  },

  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Summary', SummarySchema);