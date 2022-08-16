import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
  const { catalogObjectId } = req.body;
  switch (req.method) {
    case "POST": {
      try {
        const response = await client.catalogApi.retrieveCatalogObject(
          catalogObjectId
        );
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
