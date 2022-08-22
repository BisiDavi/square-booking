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
        const response =
          await client.bookingsApi.retrieveBusinessBookingProfile();
        console.log("retrieveBusinessBookingProfile", response.result);
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
