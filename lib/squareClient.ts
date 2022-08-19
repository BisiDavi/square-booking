export default async function squareClient(token?: string) {
  const squareClient = await import("square");

  console.log("token", token);

  const squareEnvironment = squareClient.Environment.Production;

  const client = new squareClient.Client({
    accessToken: token,
    environment: squareEnvironment,
  });

  return { client };
}
