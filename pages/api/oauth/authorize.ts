// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientID =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID
      : process.env.NEXT_PUBLIC_SQUARE_SANDBOX_APP_ID;

  const stateCode = uuidv4();

  switch (req.method) {
    case "GET": {
      try {
        axios.get(
          `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=APPOINTMENTS_READ+APPOINTMENTS_WRITE+APPOINTMENTS_ALL_READ+APPOINTMENTS_BUSINESS_SETTINGS_READ&session=false&state=${stateCode}`
        );
        res.status(200).json(null);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
