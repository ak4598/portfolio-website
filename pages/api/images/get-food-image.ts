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

  const { id } = req.query;
  try {
    const images = await FoodModel.findById(id);
    res.status(200).json(images);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}
