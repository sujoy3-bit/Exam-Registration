const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  DOB: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
