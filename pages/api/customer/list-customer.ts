// import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function CreateCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();

  switch (req.method) {
    case "GET": {
      try {
        const response = await client.customersApi.listCustomers();
        res.status(200).json(response.result);
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
