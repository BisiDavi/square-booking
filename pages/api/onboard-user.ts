// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DBClient } from "@/DB/DBConnection";
import fetchAccessTokenFromDB from "@/DB/fetchAccessTokenFromDB";
import type { NextApiRequest, NextApiResponse } from "next";
import tokenScope from "@/lib/tokenScope";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  const clientID = process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID;
  const { basicScopeString } = tokenScope();

  const squareLink = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=${basicScopeString}&session=false&state=${email}`;

  switch (req.method) {
    case "POST": {
      try {
        const dbClient = await DBClient();
        await fetchAccessTokenFromDB(dbClient, email)
          .then((response) => {
            console.log("fetchAccessTokenFromDB", response);
            if (response) {
              res.status(200).json(response);
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
