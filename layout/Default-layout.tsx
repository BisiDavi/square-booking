/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/Modal/AuthModal";
import { useAppSelector } from "@/hooks/useRedux";
import { useAppDispatch } from "@/redux/store";
import { updateAppload } from "@/redux/ui-slice";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  const { apploaded } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateAppload(true));
  }, []);

  return (
    <>
      {!apploaded && <SpinnerRipple centerRipple />}
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
