import type { NextApiRequest, NextApiResponse } from "next";
import squareClient from "@/squareClient";

export default async function RetrieveLocationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  const { client } = squareClient(merchant.access_token);

  const locationId = req.body.locationId;
  switch (req.method) {
    case "POST": {
      try {
        const response = await client.locationsApi.retrieveLocation(locationId);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
