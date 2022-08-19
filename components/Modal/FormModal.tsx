import { BsSearch } from "react-icons/bs";

import Modal from "@/components/Modal";

interface Props {
  input: { placeholder: string };
  modal: null | "form-modal-location";
  toggleModal: () => void;
}

export default function FormModal({ input, modal, toggleModal }: Props) {
  const { placeholder } = input;
  return (
    <Modal title={placeholder} modal={modal} toggleModal={toggleModal}>
      <div className="form-modal">
        <div className="search-input relative mx-auto flex justify-center w-5/6 ">
          <BsSearch className="mr-2 text-xl absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 py-2 w-full rounded-md pl-10"
          />
        </div>
      </div>
    </Modal>
  );
}
