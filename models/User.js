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
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Email format invalid']
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    'Password must contain at least one letter and one number'
  ]
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