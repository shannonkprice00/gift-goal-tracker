const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const donationSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    donor: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    }
  });
  
  const Donation = model('Donation', donationSchema);

module.exports = Donation;
