const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  modules: [{
    type: Schema.Types.ObjectId,
    ref: 'Module'
  }],

  resumes: [{
    type: Schema.Types.ObjectId,
    ref: 'Resume'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);