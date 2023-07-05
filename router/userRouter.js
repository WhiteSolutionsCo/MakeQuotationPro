const express = require("express");

const router = express.Router();

const {
  createUser,
  getSingleUser,
  update,
  deleteOne,
} = require("../services/userService");
const { createUserValidator } = require("../utils/validators/userValidator");
const {
  checkMongoIdValidator,
} = require("../utils/validators/genericValidators");

router.route("/").post(createUserValidator, createUser);
router
  .route("/:id")
  .get(checkMongoIdValidator, getSingleUser)
  .put(checkMongoIdValidator, update)
  .delete(checkMongoIdValidator, deleteOne);

module.exports = router;
