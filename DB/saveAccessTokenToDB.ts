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

export async function updateAccessToken(
  client: any,
  data: accessTokenDataType
) {
  await client
    .db("square-booking")
    .collection("auth")
    .findOneAndUpdate({ email: data.email }, data);
}
