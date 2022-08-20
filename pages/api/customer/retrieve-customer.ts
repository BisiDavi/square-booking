// import formatBigInt from "@/lib/formatBigInt";
import formatBigInt from "@/lib/formatBigInt";
import userSquareClient from "@/square/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function RetrieveCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await userSquareClient();
  const { id } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.customersApi.retrieveCustomer(id);
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
