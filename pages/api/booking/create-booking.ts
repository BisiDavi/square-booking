import formatBigInt from "@/lib/formatBigInt";
import adminSquareClient from "@/square/admin";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = await adminSquareClient(merchant.token);
  const { startAt, locationId, customerId, customerNote, appointmentSegments } =
    req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.bookingsApi.createBooking({
          booking: {
            startAt,
            locationId,
            customerId,
            customerNote,
            appointmentSegments,
          },
        });
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
