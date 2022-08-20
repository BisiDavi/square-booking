export default async function adminSquareClient(token: string) {
  const squareClient = await import("square");

  const squareEnvironment = squareClient.Environment.Production;

  const client = new squareClient.Client({
    accessToken: token,
    environment: squareEnvironment,
  });

  return { client };
}
