import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import { FoodModel } from "../../../models/model";

export default async function addImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }

  const { cuisine, name, image, steps, time, difficulty, ingredients } =
    req.body;

  const newImage = new FoodModel({
    cuisine,
    name,
    image,
    steps,
    time,
    difficulty,
    ingredients,
  });

  try {
    await newImage.save(newImage);
    res.status(201).json(newImage);
  } catch (error: any) {
    res.status(409).json({ message: error });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};
