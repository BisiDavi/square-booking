import Modal from "@/components/Modal";
import ListLocationView from "@/components/View/ListLocationView";
import TeamModalView from "@/components/View/TeamModalView";

import type { modalStateType } from "@/types/redux-types";

interface Props {
  modal: modalStateType;
  toggleModal: () => void;
  title: string;
  name: string;
}

export default function FormModal({ modal, toggleModal, title, name }: Props) {
  return (
    <>
      {modal === "form-modal-location" ? (
        <Modal title={title} modal={modal} toggleModal={toggleModal}>
          <ListLocationView name={name} />
        </Modal>
      ) : (
        modal === "form-modal-team" && (
          <Modal title={title} modal={modal} toggleModal={toggleModal}>
            <TeamModalView name={name} />
          </Modal>
        )
      )}
    </>
  );
}
