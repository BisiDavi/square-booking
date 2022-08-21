/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  label: string;
  className?: string;
  formType: string;
}

export default function Checkbox({ label, className, formType }: Props) {
  const { getClickInputValue, onChangeHandler } = useReduxForm();
  const id = formElementId(label, formType);
  const value = getClickInputValue(id);
  const [checkbox, setCheckbox] = useState(value);

  function onClickHandler() {
    setCheckbox((prevState: boolean) => !prevState);
  }

  useEffect(() => {
    onChangeHandler(checkbox, id, true);
  }, [checkbox]);

  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-100 w-full ${className}`}
    >
      <input
        type="checkbox"
        checked={checkbox}
        className="mr-4"
        name={id}
        onClick={onClickHandler}
      />{" "}
      {label}
    </div>
  );
}
