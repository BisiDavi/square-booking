export default async function squareClient(environment?: string) {
  const squareClient = await import("square");

  const squareEnvironment = environment
    ? squareClient.Environment.Production
    : squareClient.Environment.Sandbox;

  const client = new squareClient.Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_SANDBOX_ACCESS_TOKEN,
    environment: squareEnvironment,
  });

  return { client };
}
