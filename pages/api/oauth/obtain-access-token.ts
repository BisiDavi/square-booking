// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import { DBClient } from "@/DB/DBConnection";
import { updateAccessToken } from "@/DB/saveAccessTokenToDB";
import tokenScope from "@/lib/tokenScope";
import type { NextApiRequest, NextApiResponse } from "next";
import formatBigInt from "@/lib/formatBigInt";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { squareCode, email } = req.body;
  const client_id = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const client_secret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_CLIENT_SECRET}`;
  const { basicScope } = tokenScope();

  switch (req.method) {
    case "POST": {
      try {
        const dbClient = await DBClient();
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
        const data = {
          ...tokenResult.data,
          email,
        };
        await updateAccessToken(dbClient, data).then(() => {
          res.status(200).json(formatBigInt(data));
        });
      } catch (error: any) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
