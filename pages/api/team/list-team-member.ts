import type { NextApiRequest, NextApiResponse } from "next";
import formatBigInt from "@/lib/formatBigInt";
import userSquareClient from "@/square/user";

export default async function RetrieveTeamHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await userSquareClient();
  const { query } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.teamApi.searchTeamMembers(query);
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
