import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const countrySchema = new Schema({
  country: { type: String, required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true },
});

const userModel = models.User || model("User", userSchema);
const countryModel = models.Country || model("Country", countrySchema);

export { userModel, countryModel };
