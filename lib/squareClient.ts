import { DBClient } from "@/DB/DBConnection";
import fetchAccessTokenFromDB from "@/DB/fetchAccessTokenFromDB";

export default async function squareClient(token?: string) {
  const squareClient = await import("square");
  const dbClient = await DBClient();

  console.log("token", token);

  const tokenData = await fetchAccessTokenFromDB(dbClient);

  const squareEnvironment = squareClient.Environment.Production;

  // console.log(" tokenData.access_token", tokenData.access_token);
  // accessToken: tokenData.access_token,

  const client = new squareClient.Client({
    accessToken: tokenData.access_token,
    environment: squareEnvironment,
  });

  return { client };
}
