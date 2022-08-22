/* eslint-disable unused-imports/no-unused-vars */
import Modal from "@/components/Modal";
import tokenScope from "@/lib/tokenScope";
import { modalStateType } from "@/types/redux-types";

interface Props {
  modal: modalStateType;
  toggleModal: (modal: modalStateType) => void;
  email: string | null;
}

export default function OAUTHPremiumUserModal({
  modal,
  toggleModal,
  email,
}: Props) {
  const { premiumScopeString } = tokenScope();

  const clientID = process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID;

  const authorizationURL = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=${premiumScopeString}&session=false&state=${email}`;
  return (
    <Modal
      title="Request for Premium Square Authorization"
      modal={modal}
      toggleModal={toggleModal}
    >
      <div className="container">
        <h3 className="font-bold text-xl text-center">
          We Notice that you&#39;re a premium Square user, please authorize this
          application, so as to enable you to use Premium Features
        </h3>
        <a
          href={authorizationURL}
          className="font-bold text-white flex mx-auto my-20 bg-blue-700 px-2 py-1 hover:bg-red-700"
        >
          Authorize
        </a>
      </div>
    </Modal>
  );
}

// We Notice that you're a premium Square user
