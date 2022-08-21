// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formatBigInt from "@/lib/formatBigInt";
import userSquareClient from "@/square/user";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function CreateCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await userSquareClient();

  switch (req.method) {
    case "GET": {
      try {
        const response = await client.catalogApi.listCatalog(undefined,"CATEGORY");
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
