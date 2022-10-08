import { Schema, model, models } from "mongoose";

const countrySchema = new Schema({
  country: { type: String, required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true },
});

const countryModel = models.Country || model("Country", countrySchema);

const FoodSchema = new Schema({
  cuisine: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  steps: { type: [String], required: true },
  time: { type: Number, required: true },
  difficulty: { type: Number, required: true },
});

const FoodModel = models.Country || model("Food", FoodSchema);

export { countryModel, FoodModel };
