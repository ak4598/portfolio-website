import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import { FoodModel } from "../../../models/model";

export default async function getCountry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }

  try {
    const imagesId = await FoodModel.find({}, "_id");

    res.status(200).json(imagesId);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}
