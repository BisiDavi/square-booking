import { PropsWithChildren } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
