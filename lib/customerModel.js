const { default: mongoose } = require("mongoose");

const customerModel = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
  district: String,
  city: String,
  houseAddress: String,
});
export const customerSchema =
  mongoose.models.customers || mongoose.model("customers", customerModel);
