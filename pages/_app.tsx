import { CookiesProvider } from "react-cookie";

import Providerlayout from "@/layout/Provider-layout";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

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
