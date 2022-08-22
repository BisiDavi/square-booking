import { useRouter } from "next/router";

import useScroll from "@/hooks/useScroll";
import ServicePageHeader from "@/components/Header/ServicePageHeader";
import MainHeader from "@/components/Header/MainHeader";
import AppHeader from "@/components/Header/AppHeader";

export default function Header() {
  const { scroll } = useScroll();
  const router = useRouter();

  return (
    <>
      {router.route.includes("service") && scroll > 80 ? (
        <ServicePageHeader />
      ) : router.route.includes("/callback") ? (
        <AppHeader />
      ) : (
        <MainHeader />
      )}
    </>
  );
}
