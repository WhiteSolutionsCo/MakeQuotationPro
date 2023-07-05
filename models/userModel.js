const mongo = require("mongoose");
const { modelsConstants } = require("../constants");

const UserSchema = mongo.Schema(
  {
    businessName: {
      type: String,
      required: [true, "Business name is required"],
      minlength: [2, "Business name min length is 3"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [2, "Email min length is 3"],
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      minlength: [2, "Phone min length is 3"],
      maxlength: [15, "Phone max length is 15"],
    },

    website: {
      type: String,
      required: [true, "Website is required"],
      minlength: [2, "Website min length is 3"],
    },

    addresses: [
      {
        type: String,
        required: [true, "Address is required"],
        minlength: [2, "Address min length is 3"],
      },
    ],

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [
        modelsConstants.min_pass_length,
        `Password min length is ${modelsConstants.min_pass_length}`,
      ],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const UserModel = mongo.model("user", UserSchema);

module.exports = UserModel;
