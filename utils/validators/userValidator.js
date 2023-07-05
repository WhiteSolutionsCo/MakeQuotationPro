const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");
const userModel = require("../../models/userModel");
const { modelsConstants } = require("../../constants");
exports.createUserValidator = [
  check("businessName")
    .notEmpty()
    .withMessage("Business Name is required")
    .isLength({ min: 2 })
    .withMessage("Too short Business name min is 2 characters"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email not valid")
    .custom(async (email) => {
      if (await userModel.findOne({ email })) {
        throw new Error("Email is already in use");
      }
      return true;
    }),
  check("phone")
    .notEmpty()
    .withMessage("phone number is required")
    .isMobilePhone("ar-EG")
    .withMessage("Please enter a valid Egyptian numbers")
    .custom(async (phonenumber) => {
      if (await userModel.findOne({ phonenumber })) {
        throw new Error("phone number is already in use");
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: modelsConstants.min_pass_length })
    .withMessage("Too short password min is 6 characters"),
  check("addresses")
    .optional()
    .isArray()
    .withMessage("Addresses must be array"),
  validatorMiddleware,
];
