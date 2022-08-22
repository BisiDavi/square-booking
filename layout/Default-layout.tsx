/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAppSelector } from "@/hooks/useRedux";
import { useAppDispatch } from "@/redux/store";
import { updateAppload } from "@/redux/ui-slice";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";
import OAUTHPremiumUserModal from "@/components/Modal/OAUTHPremiumUserModal";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  const { apploaded, modal } = useAppSelector((state) => state.UI);
  const { merchant } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateAppload(true));
  }, []);

  return (
    <>
      <OAUTHPremiumUserModal
        modal={modal}
        toggleModal={}
        email={merchant.email}
      />
      {!apploaded && <SpinnerRipple centerRipple />}
      <Head>
        <title>Booking made easy, try us today</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
