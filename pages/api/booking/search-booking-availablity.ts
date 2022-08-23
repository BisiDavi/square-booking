import formatBigInt from "@/lib/formatBigInt";
import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { formData } = req.body;
  const merchant = req.cookies.merchant ? JSON.parse(req.cookies.merchant) : {};

  console.log("formData", formData);

  const { client } = squareClient(merchant.access_token);
  const { startAt, endAt, locationId, serviceVariationId, teamMemberIdFilter } =
    formData;

  switch (req.method) {
    case "POST": {
      try {
        const response: any = await client.bookingsApi.searchAvailability({
          query: {
            filter: {
              startAtRange: {
                startAt,
                endAt,
              },
              locationId,
              segmentFilters: [
                {
                  serviceVariationId,
                  teamMemberIdFilter: {
                    any: [teamMemberIdFilter],
                  },
                },
              ],
            },
          },
        });
        res.status(200).json(formatBigInt(response.result));
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
