import { useState } from "react";

type modalState = "auth-modal" | null;

export default function useAuth() {
  const [modal, setModal] = useState<"auth-modal" | null>(null);

  function toggleModal(modalState: modalState) {
    setModal(modalState);
  }

  return { modal, toggleModal };
}
