import Link from "next/link";
import { memo } from "react";

import Modal from "@/components/Modal";
import Tabs from "@/components/Tab";
import AuthForm from "@/components/Form/AuthForm";
import useUI from "@/hooks/useUI";

function AuthModalComponent() {
  const { modal, toggleModal } = useUI();

  return (
    <Modal
      title="Welcome, Sign in / Sign up"
      modal={modal}
      toggleModal={toggleModal}
    >
      <Tabs
        tabHeader={["Sign in", "Sign up"]}
        tabBody1={<AuthForm type="signin" />}
        tabBody2={<AuthForm type="signup" />}
      />
      <h3 className="text-center font-medium text-xl">
        To become a Seller,
        <Link href="/admin/login">
          <a className="text-blue-500 hover:text-red-500 ml-1">Login / Signup </a>
        </Link>
      </h3>
    </Modal>
  );
}

const AuthModal = memo(AuthModalComponent);
export default AuthModal;
