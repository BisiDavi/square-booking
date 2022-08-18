import { DBClient } from "@/DB/DBConnection";
import fetchAccessTokenFromDB from "@/DB/fetchAccessTokenFromDB";

export default async function squareClient() {
  const squareClient = await import("square");
  const dbClient = await DBClient();

  const tokenData = await fetchAccessTokenFromDB(dbClient);

  const squareEnvironment = squareClient.Environment.Production;

  console.log(" tokenData.access_token", tokenData.access_token);

  const client = new squareClient.Client({
    accessToken: tokenData.access_token,
    environment: squareEnvironment,
  });

  return { client };
}
// EAAAEZH_bK9xCDQDnxVUb1dABMqg_UvPqlGidyEz9qiFMC1JMAN1UkHd2FtwnGDc