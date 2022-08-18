export default async function fetchAccessTokenFromDB(client: any) {
  const tokenData = await client
    .db("square-booking")
    .collection("auth")
    .find({})
    .toArray();

  console.log("tokenData", tokenData);
  return tokenData[0];
}

export async function fetchAccessTokenFromDBViaEmail(
  client: any,
  emailAddress: string
) {
  console.log("emailAddress", emailAddress);

  return await client
    .db("square-booking")
    .collection("auth")
    .findOne({ email: emailAddress });
}
