export default async function userSquareClient() {
  const squareClient = await import("square");

  const squareEnvironment = squareClient.Environment.Production;

  const client = new squareClient.Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_ACCESS_TOKEN,
    environment: squareEnvironment,
  });

  return { client };
}


