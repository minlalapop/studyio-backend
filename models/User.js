const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }],

  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],

  statistics: [{
    type: Schema.Types.ObjectId,
    ref: 'Statistic'
  }],

  summaries: [{
    type: Schema.Types.ObjectId,
    ref: 'Summary'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);