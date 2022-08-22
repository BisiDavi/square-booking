import { v4 as uuidv4 } from "uuid";

import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = squareClient(merchant.access_token);
  const { formData } = req.body;

  console.log("formData", formData);

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.catalogApi.upsertCatalogObject({
          idempotencyKey: uuidv4(),
          object: formData,
        });
        console.log("upsertCatalogObject", response.result);
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}