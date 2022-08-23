/* eslint-disable @next/next/no-img-element */
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";

import Image from "next/image";
import Head from "next/head";

import Button from "@/components/UI/Button";
import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";

export default function MainHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <>
      <Head>{storeProfile?.name} | Book your appointment with easy.</Head>
      <header className="bg-gray-900 py-2 w-full h-30 fixed z-50">
        <div className="container  justify-center  py-2 flex items-center mx-auto lg:justify-between">
          {storeProfile?.logoUrl ? (
            <Link passHref href="/">
              <a className="logo">
                <Image
                  src={storeProfile?.logoUrl}
                  alt="logo"
                  height={95}
                  width={95}
                />
              </a>
            </Link>
          ) : (
            <Logo className="flex mx-auto my-2 lg:m-0" />
          )}
          <div className="button-group hidden lg:flex items-center">
            <Link href="/onboarding" passHref>
              <a>
                <Button
                  text="Become a Seller"
                  className="text-white flex items-center hover:text-gray-500"
                  type="button"
                  icon={<BsPersonCircle className="mr-4 text-2xl" />}
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
