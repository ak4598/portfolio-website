import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import { countryModel } from "../../../models/model";

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
    const imagesId = await countryModel.find({ country: country }, "_id");

    res.status(200).json(imagesId);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}
