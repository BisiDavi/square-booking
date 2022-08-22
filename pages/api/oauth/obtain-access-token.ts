// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import { DBClient } from "@/DB/DBConnection";
import saveAccessTokenToDB from "@/DB/saveAccessTokenToDB";
import tokenScope from "@/lib/tokenScope";

import type { NextApiRequest, NextApiResponse } from "next";
import { businessBookingProfile } from "@/requests/postRequests";
import formatBigInt from "@/lib/formatBigInt";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { squareCode, email } = req.body;
  const client_id = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const client_secret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;
  const dbClient = await DBClient();
  const { basicScope } = tokenScope();

  async function saveToDBSendToServer(response: any, status: boolean) {
    const data = {
      ...response.data,
      premium: status,
      email,
    };
    return await saveAccessTokenToDB(dbClient, data).then(() => {
      console.log("data-data", data);
      res.status(200).json(formatBigInt(data));
    });
  }

  switch (req.method) {
    case "POST": {
      try {
        const tokenResult = await axios.post(
          "https://connect.squareup.com/oauth2/token",
          {
            client_id,
            client_secret,
            grant_type: "authorization_code",
            code: squareCode,
            short_lived: false,
            scopes: basicScope,
          }
        );
        console.log("tokenResut", tokenResult);
        const profileResult = await businessBookingProfile(
          tokenResult.data.access_token
        );
        console.log("profileResult", profileResult);
        const parsedData = JSON.parse(
          profileResult?.data
        ).businessBookingProfile;
        console.log("parsedData-api", parsedData);

        if (parsedData.supportSellerLevelWrites) {
          await saveToDBSendToServer(tokenResult, true);
        } else {
          await saveToDBSendToServer(tokenResult, false);
        }
      } catch (error: any) {
        console.log("error", error);
        console.log("error-resposne", error?.response);
        res.status(400).json(error);
      }
    }
  }
}
