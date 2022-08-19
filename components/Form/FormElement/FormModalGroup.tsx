import { useState } from "react";

import Button from "@/components/UI/Button";
import toSlug from "@/lib/toSlug";
import FormModal from "@/components/Modal/FormModal";

interface Props {
  input: {
    label: string;
    text: string;
    placeholder: string;
  };
}

export default function FormModalGroup({ input }: Props) {
  const [modal, setModal] = useState(false);
  const { label, text } = input;
  const id = toSlug(label);

  function modalHandler() {
    setModal((prevState) => !prevState);
  }

  return (
    <>
      <FormModal modal={modal} toggleModal={modalHandler} input={input} />
      <div className={`input-group flex items-center h-12`}>
        <label
          className="bg-gray-300 text-gray-900 px-3 py-4 border-b border-white font-bold h-full items-center flex"
          htmlFor={id}
        >
          {label}
        </label>
        <div id={id}>
          <Button
            text={text}
            className="placeholder-gray-300 px-3 h-full py-4 font-bold border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            onClick={modalHandler}
          />
        </div>
        <style jsx>
          {`
            .input-group {
              width: 750px;
            }
            .input-group label {
              width: 300px;
            }
            .input-group input {
              width: 100%;
            }
          `}
        </style>
      </div>
    </>
  );
}
