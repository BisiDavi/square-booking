import formatBigInt from "@/lib/formatBigInt";
import adminSquareClient from "@/square/admin";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = await adminSquareClient(merchant.token);
  const { searchQuery } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.catalogApi.searchCatalogObjects({
          ...searchQuery,
        });
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
