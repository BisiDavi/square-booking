import { BsSearch } from "react-icons/bs";

import Modal from "@/components/Modal";

interface Props {
  input: { placeholder: string };
  modal: boolean;
  toggleModal: () => void;
}

export default function FormModal({ input, modal, toggleModal }: Props) {
  const { placeholder } = input;
  return (
    <Modal title={placeholder} modal={modal} toggleModal={toggleModal}>
      <div className="form-modal">
        <div className="search-input">
          <BsSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-100 rounded-md"
          />
        </div>
      </div>
    </Modal>
  );
}
