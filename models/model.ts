import { Schema, model, models } from "mongoose";

const imageSchema = new Schema({ country: String, image: String });

const imageModel = models.imageModel || model("Images", imageSchema);

export default imageModel;
