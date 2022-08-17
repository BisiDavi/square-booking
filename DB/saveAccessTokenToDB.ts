type accessTokenDataType = {
  [key: string]: any;
};

export default async function saveAccessTokenToDB(
  client: any,
  accessTokenData: accessTokenDataType
) {
  await client
    .db("square-booking")
    .collection("auth")
    .insertOne(accessTokenData);
}
