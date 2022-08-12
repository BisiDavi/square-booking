import { PropsWithChildren } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Modal title="Welcome to BookSpree, Sign up or Login" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
