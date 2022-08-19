import { CookiesProvider } from "react-cookie";

import Providerlayout from "@/layout/Provider-layout";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { GetServerSidePropsContext } from "next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <Providerlayout>
          <Component {...pageProps} />
        </Providerlayout>
      </CookiesProvider>
    </>
  );
}

export default MyApp;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.cookies?.merchant) {
    return {
      redirect: {
        destination: "/onboarding",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
