import type { NextApiRequest, NextApiResponse } from "next";
import squareClient from "@/squareClient";

export default async function RetrieveTeamHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  const { client } = await squareClient(merchant.access_token);
  const teamMemberId = req.body.teamMemberId;
  switch (req.method) {
    case "POST": {
      try {
        const response = await client.teamApi.retrieveTeamMember(teamMemberId);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
