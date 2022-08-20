import Modal from "@/components/Modal";
import ListLocationView from "@/components/View/ListLocationView";
import TeamModalView from "@/components/View/TeamModalView";

interface Props {
  input: { placeholder: string; name: string };
  modal: null | "form-modal-location";
  toggleModal: () => void;
}

export default function FormModal({
  input,
  modal,
  toggleModal,
}: Props) {
  const { placeholder } = input;
  return (
    <Modal title={placeholder} modal={modal} toggleModal={toggleModal}>
      {input.name === "location" ? <ListLocationView /> : <TeamModalView />}
    </Modal>
  );
}
