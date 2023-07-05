const mongo = require("mongoose");
const { modelsConstants } = require("../constants");

const TermSchema = mongo.Schema(
  {
    title: {
      type: String,
      required: [true, "Term title is required"],
      minlength: [modelsConstants.min_term_name, `Too short term title`],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const TermModel = mongo.model("term", TermSchema);

module.exports = TermModel;
