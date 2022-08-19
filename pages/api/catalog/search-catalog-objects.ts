// import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = await squareClient(merchant.token);
  const { searchQuery } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.catalogApi.searchCatalogObjects({
          ...searchQuery,
        });
        console.log("searchCatalogObjects", response.result);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
