import { BsPersonCircle } from "react-icons/bs";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import useUI from "@/hooks/useUI";

export default function Header() {
  const { toggleModal } = useUI();
  return (
    <div className="bg-gray-900 py-2">
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
    </div>
  );
}
