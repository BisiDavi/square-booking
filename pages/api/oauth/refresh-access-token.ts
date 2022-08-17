// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import squareClient from "@/lib/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();

  const { refreshToken } = req.body;
  const clientId = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const clientSecret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.oAuthApi.obtainToken({
          clientId,
          clientSecret,
          grantType: "refresh_token",
          refreshToken,
        });
        console.log("retrieveBusinessBookingProfile", response.result);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
