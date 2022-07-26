// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function CreateCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  const { client } = squareClient(merchant.access_token);
  const { email, firstName, lastName, idempotencyKey } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.customersApi.createCustomer({
          givenName: firstName,
          familyName: lastName,
          emailAddress: email,
          idempotencyKey,
        });
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
