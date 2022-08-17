import Head from "next/head";
import { PropsWithChildren } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/Modal/AuthModal";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Booking made easy, try us today</title>
      </Head>
      <AuthModal />
      <Header />
      {children}
      <Footer />
    </>
  );
}
