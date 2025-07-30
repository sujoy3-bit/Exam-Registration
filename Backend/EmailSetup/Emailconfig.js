const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sender = {
  email: process.env.EMAIL_USER,
  name: "From Amrita Group of India",
};

module.exports = { transporter, sender };
