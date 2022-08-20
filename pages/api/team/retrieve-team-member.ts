import type { NextApiRequest, NextApiResponse } from "next";
import userSquareClient from "@/square/user";

export default async function RetrieveTeamHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await userSquareClient();
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
