import { Schema, model, models } from "mongoose";

const countrySchema = new Schema({
  country: { type: String, required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true },
});

const countryModel = models.Country || model("Country", countrySchema);

export { countryModel };
