// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DBClient } from "@/DB/DBConnection";
import fetchAccessTokenFromDB from "@/DB/fetchAccessTokenFromDB";
import type { NextApiRequest, NextApiResponse } from "next";

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
        await fetchAccessTokenFromDB(dbClient, email)
          .then((response) => {
            console.log("fetchAccessTokenFromDBViaEmail-response", response);
            if (response) {
              res.status(200).json({
                status: "onboarded",
                accessToken: response.access_token,
              });
            } else {
              res.status(400).json({
                status: "not-onboarded",
                onboardingLink: squareLink,
              });
            }
          })
          .catch((err) => {
            console.log("db-error", err);
            res
              .status(400)
              .json({ status: "not-onboarded", onboardingLink: squareLink });
          });
      } catch (error) {
        console.log("error", error);
        res
          .status(400)
          .json({ status: "not-onboarded", onboardingLink: squareLink });
      }
    }
  }
}
