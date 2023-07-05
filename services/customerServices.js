const Customer = require("../models/customerModel");

const {
  createOne,
  getOne,
  updateOne,
  deleteOne,
  getAll,
} = require("./handlerFactory");

// @desc   Create new Customer
// @route  POST /api/v1/customers/
// @access Private
exports.createCustomer = createOne(Customer);

// @desc   Get Customer
// @route  GET /api/v1/customers/:id
// @access Private
exports.getCustomer = getOne(Customer);

// @desc   Update Customer
// @route  PUT /api/v1/customers/:id
// @access Private
exports.udpate = updateOne(Customer);

// @desc   Update Customer
// @route  DELETE /api/v1/customers/:id
// @access Private
exports.deleteOne = deleteOne(Customer);

// @desc   Get All Customers
// @route  GET /api/v1/customers/
// @access Private
exports.getAllCustomers = getAll(Customer);
