import { BsPersonCircle } from "react-icons/bs";

import Button from "@/components/UI/Button";
import Logo from "@/components/Logo";
import useUI from "@/hooks/useUI";

export default function MainHeader() {
  const { toggleModal } = useUI();

  return (
    <header className="bg-gray-900 py-2 w-full h-30 fixed z-50">
      <div className="container flex items-center mx-auto justify-between">
        <Logo />
        <div className="button-group flex items-center">
          <Button
            text="Log in / Sign up"
            className="text-white flex items-center hover:text-gray-500"
            type="button"
            icon={<BsPersonCircle className="mr-4 text-2xl" />}
            onClick={() => toggleModal("auth-modal")}
          />
        </div>
      </div>
    </header>
  );
}