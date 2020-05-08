require("babel-polyfill");
require("dotenv").config();

const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "aolausoro-tech.firebaseapp.com",
  databaseURL: "https://aolausoro-tech.firebaseio.com",
  projectId: "aolausoro-tech",
  storageBucket: "aolausoro-tech.appspot.com",
  messagingSenderId: "1064703841378",
  appId: "1:1064703841378:web:5c76bd0e1cf3b9cad92d3b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

exports.getMessages = async (req, res, next) => {
  const Message = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  try {
    const messageRef = await database.collection("messages").get();
    const messageArray = [];
    messageRef.forEach((doc) => {
      messageArray.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    if (messageRef.empty) {
      const messageDocRef = database.collection("messages").doc();
      await messageDocRef.set(Message);
      return messageDocRef;
    }
    return res.status(200).json({
      success: true,
      data: messageArray,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addMessages = async (req, res, next) => {
  const Message = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  console.log(Message);
  try {
    const setMessages = await database.collection("messages").add(Message);
    const messages = await setMessages.get();
    return res.status(200).json({
      success: true,
      id: setMessages.id,
      data: messages.data(),
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.sendMail = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const output = `
                <p>You have a new contact request</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Subject: ${subject}</li>
                </ul>
                <h3>Message</h3>
                <p>${message}</p>
            `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "outlook.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: process.env.USER_EMAIL, // generated user
      pass: process.env.USER_PASS, // generated password
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
    // debug: true, // show debug output
    // logger: true, // log information in console
  });

  // Setup email data with unicode symbols
  const mailOptions = {
    from: '"Adewoyin Oladipupo-Usoro" <adewoyin@aolausoro.tech>', // sender address
    to: "adewoyin@aolausoro.tech", // list of receivers
    text: "Hello?", // plain text body
    html: output, // html body
  };

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return `Message Sent: ${info.messageId}`;
  });

  next();
};
