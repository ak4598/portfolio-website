import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/mongodb";
import { countryModel } from "../../../models/model";

export default async function addImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.ENV === "localhost") {
    try {
      await connectMongo();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }

    const { country, caption, image } = req.body;

    const newImage = new countryModel({
      country,
      caption,
      image,
    });

    try {
      await newImage.save(newImage);
      res.status(201).json(newImage);
    } catch (error: any) {
      res.status(409).json({ message: error });
    }
  } else {
    res.status(403);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};
