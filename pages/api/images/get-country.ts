import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import imageModel from "../../../models/model";

export default async function getCountry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }

  const { country } = req.query;

  try {
    const images = await imageModel.find({ country: country });
    res.status(200).json(images);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}
