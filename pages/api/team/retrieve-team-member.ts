import type { NextApiRequest, NextApiResponse } from "next";
import squareClient from "@/lib/squareClient";

export default async function RetrieveTeamHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
  const teamMemberId = req.body.teamMemberId;
  switch (req.method) {
    case "POST": {
      try {
        const response = await client.teamApi.retrieveTeamMember(teamMemberId);
        console.log("teamMember", response.result);
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
