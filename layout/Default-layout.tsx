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
import useUI from "@/hooks/useUI";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  const { apploaded } = useAppSelector((state) => state.UI);
  const { merchant } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();
  const { modal, toggleModal } = useUI();

  useEffect(() => {
    dispatch(updateAppload(true));
  }, []);

  return (
    <>
      {modal === "oauth-premium-modal" && (
        <OAUTHPremiumUserModal
          modal={modal}
          toggleModal={() => toggleModal(null)}
          email={merchant.email}
        />
      )}
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
