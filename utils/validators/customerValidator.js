const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");

const { modelsConstants } = require("../../constants");

exports.createCustomerValidator = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: modelsConstants.min_customer_name })
    .withMessage(`Name min length is ${modelsConstants.min_customer_name}`),
  check("companyCode")
    .notEmpty()
    .withMessage("Company code is required")
    .isLength({ min: modelsConstants.min_company_code })
    .withMessage(
      `Company code min length is ${modelsConstants.min_company_code}`
    ),
  check("companyName")
    .notEmpty()
    .withMessage("Company name is required")
    .isLength({ min: modelsConstants.min_company_name })
    .withMessage(
      `Company name min length is ${modelsConstants.min_company_name}`
    ),
  check("email")
    .notEmpty()
    .withMessage("Email name is required")
    .isEmail()
    .withMessage("Email not valid"),

  check("phone")
    .notEmpty()
    .withMessage("Phone name is required")
    .isMobilePhone("ar-EG")
    .withMessage("Please enter a valid Egyptian phone numbers"),
  check("addresses").isArray().optional(),
  validatorMiddleware,
];
