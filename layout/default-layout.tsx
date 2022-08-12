import { PropsWithChildren } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/Modal/AuthModal";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <AuthModal />
      <Header />
      {children}
      <Footer />
    </>
  );
}
