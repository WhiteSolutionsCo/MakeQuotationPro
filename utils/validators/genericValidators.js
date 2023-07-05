const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");

exports.checkMongoIdValidator = [
  check("id").isMongoId().withMessage("Invalid id"),
  validatorMiddleware,
];
