const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");
const userModel = require("../../models/userModel");
const { modelsConstants } = require("../../constants");

exports.loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email not valid")
    .custom(async (email) => {
      if (!(await userModel.findOne({ email }))) {
        throw new Error("Email not found");
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: modelsConstants.min_pass_length })
    .withMessage("Too short password min is 6 characters"),
  validatorMiddleware,
];
