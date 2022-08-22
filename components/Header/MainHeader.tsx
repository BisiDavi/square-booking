import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";

import Button from "@/components/UI/Button";
import Logo from "@/components/Logo";

export default function MainHeader() {
  return (
    <header className="bg-gray-900 py-2 w-full h-30 fixed z-50">
      <div className="container flex items-center mx-auto justify-between">
        <Logo className="flex mx-auto my-2 lg:m-0" />
        <div className="button-group hidden flex items-center">
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
  );
}
