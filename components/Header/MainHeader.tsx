import { BsPersonCircle } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import Button from "@/components/UI/Button";
import Logo from "@/components/Logo";
import useUI from "@/hooks/useUI";
import useFirebase from "@/hooks/useFirebase";
import useAuthMutation from "@/hooks/useAuthMutation";

export default function MainHeader() {
  const { toggleModal } = useUI();
  const { getAuthdetails } = useFirebase();
  const { useSignoutMutation } = useAuthMutation();
  const signoutMutate = useSignoutMutation();

  function signoutHandler() {
    return signoutMutate.mutate();
  }

  const authDetails = getAuthdetails();
  console.log("authDetails", authDetails);
  const authDetailsArray = Object.values(authDetails);

  return (
    <header className="bg-gray-900 py-2 w-full h-30 fixed z-50">
      <div className="container flex items-center mx-auto justify-between">
        <Logo />
        <div className="button-group flex items-center">
          {authDetailsArray.length === 0 ? (
            <Button
              text="Log in / Sign up"
              className="text-white flex items-center hover:text-gray-500"
              type="button"
              icon={<BsPersonCircle className="mr-4 text-2xl" />}
              onClick={() => toggleModal("auth-modal")}
            />
          ) : (
            <div className="flex items-center">
              <span className="mr-2 text-white">
                Hello , {authDetails?.displayName}
              </span>
              <Button
                text="Sign out"
                className="text-white flex items-center hover:text-gray-500"
                type="button"
                icon={<FaSignOutAlt className="mr-4 text-2xl" />}
                onClick={signoutHandler}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
