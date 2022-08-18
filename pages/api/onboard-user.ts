// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DBClient } from "@/DB/DBConnection";
import { fetchAccessTokenFromDBViaEmail } from "@/DB/fetchAccessTokenFromDB";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const clientID = process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID;

  const squareLink = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=APPOINTMENTS_READ+APPOINTMENTS_WRITE+APPOINTMENTS_ALL_READ+APPOINTMENTS_BUSINESS_SETTINGS_READ+ITEMS_READ+ITEMS_WRITE+MERCHANT_PROFILE_READ+MERCHANT_PROFILE_WRITE+EMPLOYEES_WRITE+EMPLOYEES_READ&session=false&state=${email}`;

  switch (req.method) {
    case "POST": {
      try {
        const dbClient = await DBClient();
        await fetchAccessTokenFromDBViaEmail(dbClient, email)
          .then((response) => {
            console.log("response", response);
            res.status(200).json({ status: "onboarded" });
          })
          .catch((err) => {
            console.log("db-error", err);
            res
              .status(400)
              .json({ status: "not-onboarded", onboardingLink: squareLink });
          });
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
