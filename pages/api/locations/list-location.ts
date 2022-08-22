// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  const { client } = await squareClient(merchant.access_token);

  switch (req.method) {
    case "GET": {
      try {
        const response = await client.locationsApi.listLocations();
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
