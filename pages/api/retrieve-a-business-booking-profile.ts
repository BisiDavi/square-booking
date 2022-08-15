// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import squareClient from "@/lib/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();

  switch (req.method) {
    case "GET": {
      try {
        const response =
          await client.bookingsApi.retrieveBusinessBookingProfile();
        console.log("retrieveBusinessBookingProfile", response.result);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
