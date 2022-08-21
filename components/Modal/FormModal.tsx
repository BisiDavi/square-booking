import Modal from "@/components/Modal";
import ListLocationView from "@/components/View/ListLocationView";
import TeamModalView from "@/components/View/TeamModalView";
import type { modalStateType } from "@/types/redux-types";

interface Props {
  modal: modalStateType;
  toggleModal: () => void;
  title: string;
}

export default function FormModal({ modal, toggleModal, title }: Props) {
  return (
    <>
      {modal === "form-modal-location" ? (
        <Modal title={title} modal={modal} toggleModal={toggleModal}>
          <ListLocationView />
        </Modal>
      ) : (
        <Modal title={title} modal={modal} toggleModal={toggleModal}>
          <TeamModalView />
        </Modal>
      )}
    </>
  );
}
