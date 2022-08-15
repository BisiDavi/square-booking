import type { NextApiRequest, NextApiResponse } from "next";
import squareClient from "@/lib/squareClient";

export default async function RetrieveLocationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
  const locationId = req.body.locationId;
  switch (req.method) {
    case "POST": {
      try {
        const response = await client.locationsApi.retrieveLocation(locationId);
        console.log("listLocation", response.result);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}