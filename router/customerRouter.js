const express = require("express");

const router = express.Router();

const {
  createCustomer,
  getCustomer,
  deleteOne,
  udpate,
  getAllCustomers,
} = require("../services/customerServices");

const {
  createCustomerValidator,
} = require("../utils/validators/customerValidator");
const {
  checkMongoIdValidator,
} = require("../utils/validators/genericValidators");

router
  .route("/")
  .post(createCustomerValidator, createCustomer)
  .get(getAllCustomers);

router
  .route("/:id")
  .put(checkMongoIdValidator, udpate)
  .delete(checkMongoIdValidator, deleteOne)
  .get(checkMongoIdValidator, getCustomer);

module.exports = router;
