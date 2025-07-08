const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuleItemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  course: [{
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }],

  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Grade'
  }]
}, {
  timestamps: true
});

moduleItem.exports = mongoose.model('ModuleItem', ModuleItemSchema);
