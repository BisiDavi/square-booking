import { Environment, Client } from "square";

export default async function squareClient(token: string) {
  console.log("tokem", token);
  const client = new Client({
    environment: Environment.Production,
    accessToken: token,
  });

  return { client };
}
