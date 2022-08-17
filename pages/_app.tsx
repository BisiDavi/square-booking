import Providerlayout from "@/layout/Provider-layout";
import type { AppProps } from "next/app";
import { useAppSelector } from "@/hooks/useRedux";
import OnboardingPage from "@/pages/onboarding";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { onboarding } = useAppSelector((state) => state.Auth);
  return (
    <Providerlayout>
      {!onboarding ? <OnboardingPage /> : <Component {...pageProps} />}
    </Providerlayout>
  );
}

export default MyApp;
