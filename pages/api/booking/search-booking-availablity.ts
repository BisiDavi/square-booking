import squareClient from "@/squareClient";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;
  console.log("token", token);
  const { client } = squareClient(token);

  switch (req.method) {
    case "POST": {
      try {
        const response: any = await client.bookingsApi.searchAvailability({
          query: {
            filter: {
              startAtRange: {
                startAt: "2020-11-26T13:00:00Z",
                endAt: "2020-11-27T13:00:00Z",
              },
              locationId: "LEQHH0YY8B42M",
              segmentFilters: [
                {
                  serviceVariationId: "RU3PBTZTK7DXZDQFCJHOK2MC",
                  teamMemberIdFilter: {
                    any: ["TMXUrsBWWcHTt79t", "TMaJcbiRqPIGZuS9"],
                  },
                },
              ],
            },
          },
        });

        if (response.businessBookingProfile.supportSellerLevelWrites) {
          return res.status(200).json({ premium: true });
        } else {
          return res.status(200).json({ premium: false });
        }
      } catch (error) {
        console.log("error", error);
        res.status(400).json(error);
      }
    }
  }
}
