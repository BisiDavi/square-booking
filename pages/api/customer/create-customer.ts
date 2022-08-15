// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/lib/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function CreateCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client } = await squareClient();
  const { email, firstName, lastName } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.customersApi.createCustomer({
          givenName: firstName,
          familyName: lastName,
          emailAddress: email,
        });

        console.log("result-result", response.result);
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
