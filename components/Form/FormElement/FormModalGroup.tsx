import Button from "@/components/UI/Button";
import toSlug from "@/lib/toSlug";
import FormModal from "@/components/Modal/FormModal";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateModal } from "@/redux/ui-slice";

interface Props {
  input: {
    label: string;
    text: string;
    placeholder: string;
  };
}

export default function FormModalGroup({ input }: Props) {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.UI);
  const { label, text } = input;
  const id = toSlug(label);

  function modalHandler() {
    dispatch(updateModal("form-modal-location"));
  }

  function closeModalHandler() {
    dispatch(updateModal(null));
  }

  return (
    <>
      {modal === "form-modal-location" && (
        <FormModal
          modal={modal}
          toggleModal={closeModalHandler}
          input={input}
        />
      )}
      <div className={`input-group flex items-center h-14`}>
        <label
          className="bg-gray-200 text-gray-900 px-3 h-14 border-b border-white font-bold h-full items-center flex"
          htmlFor={id}
        >
          {label}
        </label>
        <div id={id}>
          <Button
            text={text}
            className="placeholder-gray-300 px-3 w-full h-14 my-0  text-left items-start border hover:text-blue-500 border-gray-300"
            onClick={modalHandler}
          />
        </div>
        <style jsx>
          {`
            .input-group {
              width: 100%;
            }
            .input-group label {
              width: 295px;
              height: 100%;
            }
            .input-group div {
              width: 100%;
            }
          `}
        </style>
      </div>
    </>
  );
}
