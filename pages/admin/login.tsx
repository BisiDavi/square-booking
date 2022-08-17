/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

export default function AdminLogin() {
  const stateCode = uuidv4();

  const clientID =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID
      : process.env.NEXT_PUBLIC_SQUARE_SANDBOX_APP_ID;

  const squareLink = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=APPOINTMENTS_READ+APPOINTMENTS_WRITE+APPOINTMENTS_ALL_READ+APPOINTMENTS_BUSINESS_SETTINGS_READ&session=false&state=${stateCode}`;
  return (
    <>
      <Head>
        <title>Seller Admin Login</title>
      </Head>
      <main className="w-full h-screen flex items-center">
        <div className="w-1/2 flex pt-20  flex-col relative h-full">
          <h3 className="text-center items-center text-2xl font-bold mb-24">
            Welcome, to the Admin Dashboard
          </h3>
          <a
            href={squareLink}
            className="bg-site-purple flex font-medium items-center w-24 mx-auto text-white px-3 py-2 rounded-md hover:bg-blue-500"
          >
            Authorize
          </a>
          <p className="font-bold text-md text-red-500 absolute bottom-10 left-20">
            By clicking on Authorize, You will be authorizing this application
            to use your Square account resources.
          </p>
        </div>
        <div className="w-2/3 block h-screen">
          <img
            src="/admin-banner.webp"
            alt="admin-banner"
            className="h-screen"
          />
        </div>
      </main>
    </>
  );
}
