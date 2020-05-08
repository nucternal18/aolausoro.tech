const express = require("express");

const router = express.Router();
// eslint-disable-next-line no-unused-vars
const { check } = require("express-validator");
const {
  getMessages,
  addMessages,
  sendMail,
} = require("../controllers/contactForm.controller");

// @route Post api/contacts
router.route("/").get(getMessages).post(sendMail, addMessages);

module.exports = router;
