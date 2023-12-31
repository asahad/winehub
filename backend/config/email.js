
import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler"
// Importing dotenv package to be able to use environment variables from .env file
import dotenv from "dotenv";
dotenv.config(); // This will read your .env file, parse the contents, and assign it to process.env

// Importing nodemailer package for sending emails
import nodemailer from "nodemailer";

// Setting up nodemailer to use Gmail as the service and credentials from environment variables
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS, // The email address of the sender
    pass: process.env.EMAIL_PASSWORD // The password for the sender's email address
  }
});

const sendWelcomeEmail = (userEmail, userName) => {
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: user.email,
    subject: 'Welcome to Our E-Commerce Site!',
    html: `<h1>Welcome, ${user.name}!</h1><p>Thank you for registering with us.</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
