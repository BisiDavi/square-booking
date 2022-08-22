import { Environment, Client } from "square";

export default async function squareClient(token: string) {
  const squareEnvironment = Environment.Production;

  const client = new Client({
    accessToken: token,
    environment: squareEnvironment,
  });

  return { client };
}
