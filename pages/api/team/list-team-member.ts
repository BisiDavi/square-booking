import type { NextApiRequest, NextApiResponse } from "next";
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";

export default async function RetrieveTeamHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
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
