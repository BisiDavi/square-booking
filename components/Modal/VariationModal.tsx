import Modal from "@/components/Modal";
import VariationTab from "@/components/Tab/VariationTab";
import type { modalStateType } from "@/types/redux-types";
import Button from "@/components/UI/Button";
import { useAppDispatch } from "@/hooks/useRedux";
import { resetVariation, updateAllVariations } from "@/redux/form-slice";

interface Props {
  modal: modalStateType;
  toggleModal: () => void;
}

export default function VariationModal({ modal, toggleModal }: Props) {
  const dispatch = useAppDispatch();

  function variationFormHandler() {
    dispatch(updateAllVariations());
    dispatch(resetVariation());
    toggleModal();
  }

  return (
    <Modal title="Add Variation" modal={modal} toggleModal={toggleModal}>
      <VariationTab />
      <Button
        text="Done"
        className="bg-blue-500 mt-4 mb-0 px-3 py-1 flex mx-auto text-white hover:bg-blue-700"
        onClick={variationFormHandler}
      />
    </Modal>
  );
}
