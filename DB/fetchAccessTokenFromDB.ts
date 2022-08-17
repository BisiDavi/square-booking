export default async function fetchAccessTokenFromDB(client: any) {
  const tokenData = await client
    .db("square-booking")
    .collection("auth")
    .find({})
    .toArray();

  console.log("tokenData", tokenData);
  return tokenData[0];
}
