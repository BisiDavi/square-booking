import Modal from "@/components/Modal";
import VariationTab from "@/components/Tab/VariationTab";
import type { modalStateType } from "@/types/redux-types";
import Button from "@/components/UI/Button";

interface Props {
  modal: modalStateType;
  toggleModal: () => void;
}

export default function VariationModal({ modal, toggleModal }: Props) {
  return (
    <Modal title="Add Variation" modal={modal} toggleModal={toggleModal}>
      <VariationTab />
      <Button
        text="Done"
        className="bg-blue-500 mt-4 mb-0 px-3 py-1 flex mx-auto text-white hover:bg-blue-700"
        onClick={toggleModal}
      />
    </Modal>
  );
}
