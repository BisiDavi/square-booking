// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import { DBClient } from "@/DB/DBConnection";
import saveAccessTokenToDB from "@/DB/saveAccessTokenToDB";
import tokenScope from "@/lib/tokenScope";

import type { NextApiRequest, NextApiResponse } from "next";
import { businessBookingProfile } from "@/requests/postRequests";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { squareCode, email } = req.body;
  const client_id = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const client_secret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;
  const dbClient = await DBClient();
  const { basicScope } = tokenScope();

  function saveToDBSendToServer(response: any, status: boolean) {
    const data = {
      ...response.data,
      premium: status,
      email,
    };
    saveAccessTokenToDB(dbClient, data);
    res.status(200).json(data);
  }

  switch (req.method) {
    case "POST": {
      try {
        axios
          .post("https://connect.squareup.com/oauth2/token", {
            client_id,
            client_secret,
            grant_type: "authorization_code",
            code: squareCode,
            short_lived: false,
            scopes: basicScope,
          })
          .then((response) => {
            console.log("tokenResponse", response);
            return businessBookingProfile(response.data.access_token).then(
              (responseItem) => {
                console.log("responseItem", responseItem);
                if (responseItem?.data?.supportSellerLevelWrites) {
                  saveToDBSendToServer(response, true);
                } else {
                  saveToDBSendToServer(response, false);
                }
              }
            );
          })
          .catch((error) => {
            console.log("obtain-access-token-error", error);
            res.status(400).json(error);
          });
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
