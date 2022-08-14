export default async function squareClient() {
  const squareClient = await import("square");
  const client = new squareClient.Client({
    accessToken: process.env.NEXT_PUBLIC_SQUARE_SANDBOX_ACCESS_TOKEN,
    environment: squareClient.Environment.Sandbox,
  });

  return { client };
}
