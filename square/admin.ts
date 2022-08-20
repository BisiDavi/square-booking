export default async function adminSquareClient(token: string) {
  const squareClient = await import("square");

  const squareEnvironment = squareClient.Environment.Production;
  // token
  console.log('token',token)

  const client = new squareClient.Client({
    accessToken: `${process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_ACCESS_TOKEN}`,
    environment: squareEnvironment,
  });

  return { client };
}
