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
    .findAndModify({ email: data.email }, data, {
      upsert: true,
      update: {
        $set: {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        },
      },
    });
}
