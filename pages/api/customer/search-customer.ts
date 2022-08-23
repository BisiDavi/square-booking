// import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function RetrieveCustomerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};
  const { client } = squareClient(merchant.access_token);
  const { email } = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const response = await client.customersApi.searchCustomers({
          query: {
            filter: {
              emailAddress: {
                exact: email,
              },
            },
          },
        });
        res.status(200).json(response.result);
      } catch (error) {
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
