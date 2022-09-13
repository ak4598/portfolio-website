import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import imageModel from "../../../models/model";

export default async function addImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Connecting to db...");
    await connectMongo();
    console.log("Connected to db.");
  } catch (error: any) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
  const { country, image } = req.body;
  const newImage = new imageModel({ country: country, image: image });

  try {
    await newImage.save(newImage);
    res.status(201).json(newImage);
  } catch (error: any) {
    res.status(409).json({ message: error });
  }
}
