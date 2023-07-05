const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");
const { modelsConstants } = require("../../constants");
exports.createTermValidator = [
  check("title")
    .notEmpty()
    .withMessage("Term name is required")
    .isLength({ min: modelsConstants.min_term_name })
    .withMessage(
      `Too short Term name min is ${modelsConstants.min_term_name} characters`
    ),
  validatorMiddleware,
];
