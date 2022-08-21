export default async function fetchAccessTokenFromDB(
  client: any,
  emailAddress: string
) {
  return await client
    .db("square-booking")
    .collection("auth")
    .findOne({ email: emailAddress });
}
