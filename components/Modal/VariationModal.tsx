import Modal from "@/components/Modal";
import VariationTab from "@/components/Tab/VariationTab";

interface Props {
  modal: null | "form-modal-location";
  toggleModal: () => void;
}

export default function VariationModal({ modal, toggleModal }: Props) {
  return (
    <Modal title="Add Variation" modal={modal} toggleModal={toggleModal}>
      <VariationTab />
    </Modal>
  );
}
