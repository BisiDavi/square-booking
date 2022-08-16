import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
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

// {
// durationMinutes,
// serviceVariationId,
// teamMemberId,
// serviceVariationVersion,
// },
