import Link from "next/link";
import { memo } from "react";

import Modal from "@/components/Modal";
import Tabs from "@/components/Tab";
import AuthForm from "@/components/Form/AuthForm";
import useUI from "@/hooks/useUI";
import { useRouter } from "next/router";

function AuthModalComponent() {
  const { modal, toggleModal } = useUI();
  const router = useRouter();

  function closeModal() {
    router.push("/admin/login");
    toggleModal(null);
  }

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
        <Link href="/admin/login" passHref>
          <button
            className="text-blue-500 hover:text-red-500 ml-1"
            type="button"
            onClick={closeModal}
          >
            Login / Signup{" "}
          </button>
        </Link>
      </h3>
    </Modal>
  );
}

const AuthModal = memo(AuthModalComponent);
export default AuthModal;
