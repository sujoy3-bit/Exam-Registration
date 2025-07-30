const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const {SendSignupcompleteEmail}  = require('../EmailSetup/Email');



const Signup = async (req, res) => {
  const { firstname, lastname, phonenumber, email, DOB, department, password } = req.body;

  if (!firstname || !lastname || !phonenumber || !email || !DOB || !department || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generate Registration Number (custom logic or let Mongo handle)
    const registrationNumber = `REG-${Date.now().toString().slice(-6)}`;

    const newStudent = new Student({
      firstname,
      lastname,
      phonenumber,
      email,
      DOB,
      department,
      registrationNumber,
      password: hashedPassword,
    });

    await newStudent.save();

  
    await SendSignupcompleteEmail(
      email,
      firstname,
      lastname,
      registrationNumber,
      password 
    );

    res.status(201).json({
      message: "Student registered successfully. Login credentials have been sent to email.",
      student: {
        id: newStudent._id,
        registrationNumber,
        email
      }
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const Login = async (req, res) => {
  const { registrationNumber, password } = req.body;

  if (!registrationNumber || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {

    const existingStudent = await Student.findOne({ registrationNumber });

    if (!existingStudent) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existingStudent.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Login success
    res.status(200).json({
      message: "Login successful",
      student: {
        id: existingStudent._id,
        registrationNumber: existingStudent.registrationNumber,
        email: existingStudent.email,
        firstname: existingStudent.firstname,
        lastname: existingStudent.lastname,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};





module.exports = { Signup, Login };
