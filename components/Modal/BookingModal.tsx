/* eslint-disable unused-imports/no-unused-vars */
import Image from "next/image";

import Modal from "@/components/Modal";
import { modalStateType } from "@/types/redux-types";


interface Props {
  modal: modalStateType;
  toggleModal: (modalState: modalStateType) => void;
}

export default function BookingModal({ modal, toggleModal }: Props) {
  return (
    <Modal title="Booking Created" modal={modal} toggleModal={toggleModal}>
      <div className="container flex flex-col">
        <div className="w-1/6 flex items-center mx-auto my-4">
          <Image
            src="/checkmark.gif"
            alt="booking successful"
            className="block mx-auto justify-center items-center"
            height={100}
            width={100}
          />
        </div>
        <h3 className="text-center font-bold">
          Congratulations, You&#39;ve successfully booked
        </h3>
      </div>
    </Modal>
  );
}
