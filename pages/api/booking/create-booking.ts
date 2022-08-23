import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  // const accessToken = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_ACCESS_TOKEN}`;
  const { client } = squareClient(merchant.access_token);
  const { bookingData } = req.body;

  console.log("bookingData", bookingData);

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.bookingsApi.createBooking({
          booking: bookingData,
        });
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
