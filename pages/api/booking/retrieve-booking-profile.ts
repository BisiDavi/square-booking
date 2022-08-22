import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;
  console.log("token", token);
  const { client } = squareClient(token);

  switch (req.method) {
    case "POST": {
      try {
        const response: any =
          await client.bookingsApi.retrieveBusinessBookingProfile();

        if (response.businessBookingProfile.supportSellerLevelWrites) {
          return res.status(200).json({ premium: true });
        } else {
          return res.status(200).json({ premium: false });
        }
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}

