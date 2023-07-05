const Term = require("../models/termsModel");

const {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll,
} = require("./handlerFactory");

// @desc   Create new term
// @route  POST /api/v1/terms/
// @access Private
exports.createOne = createOne(Term);

// @desc   Get term
// @route  GET /api/v1/terms/:id
// @access Private
exports.getOne = getOne(Term);

// @desc   Update term
// @route  PUT /api/v1/terms/:id
// @access Private
exports.udpate = updateOne(Term);

// @desc   Update term
// @route  DELETE /api/v1/terms/:id
// @access Private
exports.deleteOne = deleteOne(Term);

// @desc   Get All Terms
// @route  GET /api/v1/terms/
// @access Private
exports.getAllTerms = getAll(Term);



