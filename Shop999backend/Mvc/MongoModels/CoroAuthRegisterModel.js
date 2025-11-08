const mongoose = require('mongoose');

// Define schema
const coroAuthRegisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  country: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  pincode: {
    type: String,
    default: '',
  },
  profilePhoto: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: '',
  },
}, { timestamps: true });

// Export model
module.exports = mongoose.model('UserRegi', coroAuthRegisterSchema);
