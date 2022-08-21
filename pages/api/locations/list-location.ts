// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userSquareClient from "@/square/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await userSquareClient();

  switch (req.method) {
    case "GET": {
      try {
        const response = await client.locationsApi.listLocations();
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
