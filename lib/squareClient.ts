export default async function squareClient(token?: string) {
  const squareClient = await import("square");

  const squareEnvironment = squareClient.Environment.Production;

  const squareClientToken = token
    ? token
    : "EAAAEdZBOcBTnvQKM6HQduSYKtQN8buEtL435vS6u3HELOhprX51qK6q0B3Mrqbe";

  const client = new squareClient.Client({
    accessToken: squareClientToken,
    environment: squareEnvironment,
  });

  return { client };
}
