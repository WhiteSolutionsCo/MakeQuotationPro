const asyncHandler = require("express-async-handler");
const sharp = require("sharp");

const { v4: uuidv4 } = require("uuid");
const { uploadImage } = require("../middlewares/uploadImageMiddleware");
const User = require("../models/userModel");
const { createToken } = require("../utils/utils");
exports.uploadUserImage = uploadImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  const fileName = `logo-${uuidv4()}-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`uploads/logo/${fileName}`);
    req.body.image = fileName;
  }
  next();
});

const { createOne } = require("./handlerFactory");

// @desc   Register new user
// @route  POST /api/v1/auth/signup
// @access Private
exports.signUp = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  const token = createToken(user._id);
  res.status(200).json({ data: user, token });
});

// @desc   Login
// @route  POST /api/v1/auth/login
// @access Private
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || password !== user.password) {
    return next(new ApiError("email or password is not correct", 401));
  }

  const token = createToken(user._id);
  res.status(200).json({ data: user, token });
});
