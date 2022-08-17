// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import { DBClient } from "@/DB/DBConnection";
import saveAccessTokenToDB from "@/DB/saveAccessTokenToDB";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { squareCode } = req.body;
  console.log("squareCode", squareCode);
  const client_id = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const client_secret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;
  const dbClient = await DBClient();

  const postData = {
    client_id,
    client_secret,
    grant_type: "authorization_code",
    code: squareCode,
    short_lived: false,
    scopes: [
      "APPOINTMENTS_READ",
      "APPOINTMENTS_WRITE",
      "APPOINTMENTS_ALL_READ",
      "APPOINTMENTS_BUSINESS_SETTINGS_READ",
    ],
  };

  switch (req.method) {
    case "POST": {
      try {
        axios
          .post("https://connect.squareup.com/oauth2/token", postData)
          .then((response) => {
            console.log("obtain-access-token-response", response);
            saveAccessTokenToDB(dbClient, response);
            res.status(200).json(response);
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
