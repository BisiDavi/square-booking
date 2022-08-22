import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  label: string;
  className?: string;
  formType: string;
  name: string;
  value: string;
}

export default function Checkbox({
  label,
  className,
  value,
  formType,
  name,
}: Props) {
  const { getClickInputValue, onChangeHandler } = useReduxForm();
  const id = formElementId(`${name}`, formType);
  const inputValue = getClickInputValue(id);

  function onClickHandler() {
    onChangeHandler(value, id, true);
  }

  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-100 w-full ${className}`}
    >
      <input
        type="checkbox"
        checked={inputValue === value}
        value={value}
        className="mr-4"
        name={id}
        onClick={onClickHandler}
      />{" "}
      {label}
    </div>
  );
}
