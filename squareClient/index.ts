import { DBClient } from "@/DB/DBConnection";
import { Environment, Client } from "square";

export default async function squareClient(token: string) {
  const squareEnvironment = Environment.Production;
  console.log("token", token);
if(!token){
  const dbClient = DBClient();

}
  const client = new Client({
    accessToken: `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_ACCESS_TOKEN}`,
    environment: squareEnvironment,
  });

  return { client };
}
