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
  const client_id = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const client_secret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;
  const dbClient = await DBClient();

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
            scopes: [
              "APPOINTMENTS_READ",
              "APPOINTMENTS_WRITE",
              "APPOINTMENTS_ALL_READ",
              "APPOINTMENTS_BUSINESS_SETTINGS_READ",
              "ITEMS_READ",
              "ITEMS_WRITE",
              "MERCHANT_PROFILE_READ",
              "MERCHANT_PROFILE_WRITE",
              "EMPLOYEES_WRITE",
              "EMPLOYEES_READ",
            ],
          })
          .then((response) => {
            console.log("obtain-access-token-response", response.data);
            saveAccessTokenToDB(dbClient, response.data);
            res.status(200).json({ data: "you're now authorized" });
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
