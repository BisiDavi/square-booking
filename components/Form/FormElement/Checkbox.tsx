import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  label: string;
  className?: string;
  formType: string;
  name: string;
}

export default function Checkbox({ label, className, formType, name }: Props) {
  const { getClickInputValue, onChangeHandler } = useReduxForm();
  const id = formElementId(`${label}-${name}`, formType);
  const value = getClickInputValue(id);

  function onClickHandler() {
    onChangeHandler(!value, id, true);
  }

  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-100 w-full ${className}`}
    >
      <input
        type="checkbox"
        checked={value}
        className="mr-4"
        name={id}
        onClick={onClickHandler}
      />{" "}
      {label}
    </div>
  );
}
