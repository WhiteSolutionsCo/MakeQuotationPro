const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../services/productServices");

const {
  createProductValidator,
} = require("../utils/validators/productValidator");

const {
  checkMongoIdValidator,
} = require("../utils/validators/genericValidators");

router
  .route("/")
  .post(createProductValidator, createProduct)
  .get(getAllProducts);

router
  .route("/:id")
  .get(checkMongoIdValidator, getProduct)
  .put(checkMongoIdValidator, updateProduct)
  .delete(checkMongoIdValidator, deleteProduct);

module.exports = router;
