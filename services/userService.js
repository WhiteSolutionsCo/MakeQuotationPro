const User = require("../models/userModel");
const { createOne, getOne, updateOne, deleteOne } = require("./handlerFactory");

// @desc   Create new user
// @route  POST /api/v1/users/
// @access Private
exports.createUser = createOne(User);

// @desc   Get user
// @route  GET /api/v1/users/:id
// @access Private
exports.getSingleUser = getOne(User);

// @desc   Update user
// @route  PUT /api/v1/users/:id
// @access Private
exports.update = updateOne(User);

// @desc   Update user
// @route  DELETE /api/v1/users/:id
// @access Private
exports.deleteOne = deleteOne(User);
