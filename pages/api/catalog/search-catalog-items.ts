// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client, Environment } from "square";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_SANDBOX_ACCESS_TOKEN,
    environment: Environment.Sandbox,
  });

  switch (req.method) {
    case "GET": {
      try {
        const response = await client.catalogApi.searchCatalogItems({
          productTypes: ["APPOINTMENTS_SERVICE"],
        });

        console.log("result-result", response.result.items);
        res
          .status(200)
          .json(
            JSON.stringify(response.result, (_, v) =>
              typeof v === "bigint" ? `${v}n` : v
            ).replace(/"(-?\d+)n"/g, (_, a) => a)
          );
      } catch (error) {
        console.log("error", error);
        res.status(400).json(JSON.stringify(error));
      }
    }
  }
}
