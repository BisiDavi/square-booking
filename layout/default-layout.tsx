import { PropsWithChildren } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
