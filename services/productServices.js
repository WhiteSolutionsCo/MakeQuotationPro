const ProductModel = require("../models/productModel");

const {
  deleteOne,
  updateOne,
  getOne,
  createOne,
  getAll,
} = require("./handlerFactory");

// @desc   Create new Product
// @route  POST /api/v1/products/
// @access Private
exports.createProduct = createOne(ProductModel);

// @desc   Get all products
// @route  GET /api/v1/products
// @access Private
exports.getAllProducts = getAll(ProductModel);

// @desc   Get product
// @route  GET /api/v1/products/:id
// @access Private
exports.getProduct = getOne(ProductModel);

// @desc   Update product
// @route  PUT /api/v1/products/:id
// @access Private
exports.updateProduct = updateOne(ProductModel);

// @desc   Delete product
// @route  DELETE /api/v1/products/:id
// @access Private
exports.deleteProduct = deleteOne(ProductModel);

// @desc   Get All Products
// @route  GET /api/v1/products/
// @access Private
exports.getAllProducts = getAll(ProductModel);
