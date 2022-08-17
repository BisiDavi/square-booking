// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { squareCode } = req.body;
  const clientId = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID}`;
  const clientSecret = `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_ACCESS_TOKEN}`;

  switch (req.method) {
    case "POST": {
      try {
        axios
          .post("https://connect.squareup.com/oauth2/token", {
            clientId,
            clientSecret,
            grantType: "authorization_code",
            code: squareCode,
            shortLived: false,
            scopes: [
              "APPOINTMENTS_READ",
              "APPOINTMENTS_WRITE",
              "APPOINTMENTS_ALL_READ",
              "APPOINTMENTS_BUSINESS_SETTINGS_READ",
            ],
          })
          .then((response) => {
            console.log("obtain-access-token-response", response);
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
