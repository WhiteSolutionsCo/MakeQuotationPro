const mongo = require("mongoose");
const { modelsConstants } = require("../constants");
const productSchema = mongo.Schema(
  {
    brand: {
      type: String,
      required: [true, "Brand is required"],
      minlength: [
        modelsConstants.min_brand,
        `Brand min length is ${modelsConstants.min_brand}`,
      ],
    },
    width: {
      type: String,
      required: [true, "Width is required"],
      minlength: [
        modelsConstants.min_width,
        `Width min length is ${modelsConstants.min_width}`,
      ],
    },
    ratio: {
      type: String,
      required: [true, "Ratio is required"],
      minlength: [
        modelsConstants.min_ratio,
        `Ratio min length is ${modelsConstants.min_ratio}`,
      ],
    },
    rimSize: {
      type: String,
      required: [true, "Rim size is required"],
      minlength: [
        modelsConstants.min_rim_size,
        `Rim size min length is ${modelsConstants.min_rim_size}`,
      ],
    },
    speedRating: {
      type: String,
      required: [true, "Speed rating is required"],
      minlength: [
        modelsConstants.min_speed_rating,
        `Speed rating min length is ${modelsConstants.min_speed_rating}`,
      ],
    },
    loadRating: {
      type: String,
      required: [true, "Load rating is required"],
      minlength: [
        modelsConstants.min_load_rating,
        `Load rating min length is ${modelsConstants.min_load_rating}`,
      ],
    },
    unitCost: {
      type: String,
      required: [true, "Unit cost size is required"],
      minlength: [
        modelsConstants.min_unit_cost,
        `Unit cost min length is ${modelsConstants.min_unit_cost}`,
      ],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const ProductModel = mongo.model("product", productSchema);

module.exports = ProductModel;
