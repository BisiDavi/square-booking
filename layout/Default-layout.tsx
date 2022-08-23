/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAppSelector } from "@/hooks/useRedux";
import { useAppDispatch } from "@/redux/store";
import { updateAppload } from "@/redux/ui-slice";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";
import OAUTHPremiumUserModal from "@/components/Modal/OAUTHPremiumUserModal";
import useUI from "@/hooks/useUI";
import AppFooter from "@/components/Footer/AppFooter";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  const { apploaded } = useAppSelector((state) => state.UI);
  const { merchant } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { modal, toggleModal } = useUI();
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  const paddingTop = storeProfile?.logoUrl
    ? "padding-top-large"
    : "padding-top-small";

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
      <Header />
      <main className={paddingTop}>{children}</main>
      {router.asPath.includes("/callback") ? <AppFooter /> : <Footer />}
    </>
  );
}
