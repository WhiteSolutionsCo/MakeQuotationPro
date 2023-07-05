const mongo = require("mongoose");
const { modelsConstants } = require("../constants");

const CustomerSchema = mongo.Schema(
  {
    name: {
      type: String,
      required: [true, "Customer name is required"],
      minlength: [
        modelsConstants.min_customer_name,
        `Too short term customer name`,
      ],
    },

    companyCode: {
      type: String,
      required: [true, "Company code is required"],
      minlength: [modelsConstants.min_company_code, `Too short company code`],
    },

    companyName: {
      type: String,
      required: [true, "Company name is required"],
      minlength: [
        modelsConstants.min_company_name,
        `Company name min length is ${modelsConstants.min_company_name}`,
      ],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    addresses: [
      {
        type: String,
        // required: [true, "Address is required"],
        minlength: [
          modelsConstants.min_address_length,
          `Address min length is ${modelsConstants.min_address_length}`,
        ],
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const CustomerModel = mongo.model("customer", CustomerSchema);

module.exports = CustomerModel;
