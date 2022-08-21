import Modal from "@/components/Modal";
import VariationTab from "@/components/Tab/VariationTab";
import type { modalStateType } from "@/types/redux-types";

interface Props {
  modal: modalStateType;
  toggleModal: () => void;
}

export default function VariationModal({ modal, toggleModal }: Props) {
  return (
    <Modal title="Add Variation" modal={modal} toggleModal={toggleModal}>
      <VariationTab />
    </Modal>
  );
}
