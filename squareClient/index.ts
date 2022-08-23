import { Environment, Client } from "square";

export default function squareClient(token: string) {
  const client = new Client({
    environment: Environment.Production,
    accessToken: token,
  });

  return { client };
}
