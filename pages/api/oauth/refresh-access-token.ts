// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import squareClient from "@/squareClient";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = await squareClient(merchant.access_token);

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
          redirectUri: "https://square-booking.vercel.app/oauth/callback",
          shortLived: false,
          scopes: [
            "ITEMS_READ",
            "ITEMS_WRITE",
            "APPOINTMENTS_READ",
            "APPOINTMENTS_WRITE",
            "APPOINTMENTS_ALL_READ",
            "APPOINTMENTS_BUSINESS_SETTINGS_READ",
            "MERCHANT_PROFILE_READ",
            "MERCHANT_PROFILE_WRITE",
            "EMPLOYEES_WRITE",
            "EMPLOYEES_READ",
          ],
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
