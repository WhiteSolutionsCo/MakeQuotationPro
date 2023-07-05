const express = require("express");

const router = express.Router();

const { signUp, login } = require("../services/authService");
// validators
const { createUserValidator } = require("../utils/validators/userValidator");
const { loginValidator } = require("../utils/validators/authValidator");

router.route("/register").post(createUserValidator, signUp);
router.route("/login").post(loginValidator, login);

module.exports = router;
