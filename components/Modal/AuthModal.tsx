import Modal from "@/components/Modal";
import Tabs from "@/components/Tab";
import { SigninForm, SignupForm } from "@/components/Form/AuthForm";
import useUI from "@/hooks/useUI";

export default function AuthModal() {
  const { modal, toggleModal } = useUI();

  return (
    <Modal
      title="Welcome, Sign in / Sign up"
      modal={modal}
      toggleModal={toggleModal}
    >
      <Tabs
        tabHeader={["Sign in", "Sign up"]}
        tabBody1={<SigninForm />}
        tabBody2={<SignupForm />}
      />
    </Modal>
  );
}
