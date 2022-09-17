import { Schema, model, models } from "mongoose";

const countrySchema = new Schema({
  country: String,
  caption: String,
  image: String,
});

const countryModel = models.Country || model("Country", countrySchema);

export { countryModel };
