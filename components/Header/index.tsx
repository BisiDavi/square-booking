import { useRouter } from "next/router";

import useScroll from "@/hooks/useScroll";
import ServicePageHeader from "@/components/Header/ServicePageHeader";
import MainHeader from "@/components/Header/MainHeader";

export default function Header() {
  const { scroll } = useScroll();
  const router = useRouter();

  return (
    <>
      {router.route.includes("service") && scroll > 80 ? (
        <ServicePageHeader />
      ) : (
        <MainHeader />
      )}
    </>
  );
}
