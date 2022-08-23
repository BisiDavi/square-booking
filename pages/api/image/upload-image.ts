import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";
import { FileWrapper } from "square";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  const { client } = squareClient(merchant.access_token);

  const file = new FileWrapper(fs.createReadStream("image_example_1.png")); // Modify this to point to your desired file.

  try {
    const response = await client.catalogApi.createCatalogImage(
      {
        idempotencyKey: uuidv4(),
        image: {
          type: "IMAGE",
          id: `#${uuidv4()}`,
        },
      },
      file
    );
    res.status(200).json(response.result);
    console.log(response.result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  switch (req.method) {
  }
}
