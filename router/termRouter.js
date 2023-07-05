const express = require("express");

const router = express.Router();

const {
  createOne,
  getOne,
  deleteOne,
  udpate,
  getAllTerms
} = require("../services/termServices");
const { createTermValidator } = require("../utils/validators/termValidator");
const {
  checkMongoIdValidator,
} = require("../utils/validators/genericValidators");

router.route("/").post(createTermValidator, createOne).get(getAllTerms);
router
  .route("/:id")
  .put(checkMongoIdValidator, createTermValidator, udpate)
  .delete(checkMongoIdValidator, deleteOne)
  .get(checkMongoIdValidator, getOne);

module.exports = router;