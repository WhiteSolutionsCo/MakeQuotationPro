const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddlewares");

const { modelsConstants } = require("../../constants");

exports.createProductValidator = [
  check("brand")
    .notEmpty()
    .withMessage("Brand is required")
    .isLength({ min: modelsConstants.min_brand })
    .withMessage(`Brand min length is ${modelsConstants.min_brand}`),
  check("width")
    .notEmpty()
    .withMessage("Width is required")
    .isLength({ min: modelsConstants.min_width })
    .withMessage(`Width min length is ${modelsConstants.min_width}`),
  check("ratio")
    .notEmpty()
    .withMessage("Ratio is required")
    .isLength({ min: modelsConstants.min_ratio })
    .withMessage(`Ratio min length is ${modelsConstants.min_ratio}`),
  check("rimSize")
    .notEmpty()
    .withMessage("Rim size is required")
    .isLength({ min: modelsConstants.min_rim_size })
    .withMessage(`Rim size min length is ${modelsConstants.min_rim_size}`),
  check("speedRating")
    .notEmpty()
    .withMessage("Speed rating size is required")
    .isLength({ min: modelsConstants.min_speed_rating })
    .withMessage(
      `Speed rating min length is ${modelsConstants.min_speed_rating}`
    ),
  check("unitCost")
    .notEmpty()
    .withMessage("Unit cost is required")
    .isLength({ min: modelsConstants.min_unit_cost })
    .withMessage(`Unit cost min length is ${modelsConstants.min_unit_cost}`),
  validatorMiddleware,
];
