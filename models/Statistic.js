const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatisticSchema = new Schema({
  performance: {
    type: Number,
    required: true,
    min: 0,
    max: 100 
  },

  timeEstimation: {
    type: Number, 
    required: true,
    min: 0
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Statistic', StatisticSchema);