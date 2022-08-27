import { v4 as uuidv4 } from "uuid";
import { FileWrapper } from "square";
import formidable from "formidable";
import fs from "fs";

import squareClient from "@/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";
import formatBigInt from "@/lib/formatBigInt";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    const merchant = req.cookies.merchant
      ? JSON.parse(req.cookies.merchant)
      : {};
    const { client } = squareClient(merchant.access_token);

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        res.status(400).json(err);
      }
      const file = new FileWrapper(fs.createReadStream(files.file.filepath));
      const response = await client.catalogApi.createCatalogImage(
        {
          idempotencyKey: uuidv4(),
          image: {
            type: "IMAGE",
            id: `#${uuidv4()}`,
            imageData: {
              caption: files.file.originalFilename.split(".")[0],
            },
          },
        },
        file
      );
      console.log(response.result);
      return res.status(200).json(formatBigInt(response.result));
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
  switch (req.method) {
  }
}
