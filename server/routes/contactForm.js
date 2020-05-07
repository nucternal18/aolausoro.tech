const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  getMessages,
  addMessages,
  sendMail,
} = require('../controllers/contactForm.controller');

//@route Post api/contacts
router.route('/').get(getMessages).post(sendMail, addMessages);

module.exports = router;
