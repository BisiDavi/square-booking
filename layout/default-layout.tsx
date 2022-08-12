import { PropsWithChildren } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Modal />
      <Header />
      {children}
      <Footer />
    </>
  );
}
