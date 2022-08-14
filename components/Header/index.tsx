import { useRouter } from "next/router";

import useScroll from "@/hooks/useScroll";
import ServicePageHeader from "./ServicePageHeader";
import MainHeader from "./MainHeader";

export default function Header() {
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 100 ? true : false;
  const router = useRouter();

  console.log("router", router);
  return (
    <>
      {router.route.includes("service") && 5 ? (
        <ServicePageHeader />
      ) : (
        <MainHeader />
      )}
    </>
  );
}
