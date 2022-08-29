import { useAppSelector } from "@/hooks/useRedux";
import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  label: string;
  className?: string;
  formType: string;
  name: string;
  type: "location" | "team";
  value: string;
}

export default function Checkbox({
  label,
  className,
  value,
  formType,
  type,
  name,
}: Props) {
  const { onCheckboxHandler } = useReduxForm();
  const id = formElementId(`${name}`, formType);
  const { form } = useAppSelector((state) => state.Form);
  const { variation } = form;

  const isChecked = type.includes("location")
    ? form.locations.includes(value)
    : form.team.includes(value);

  const isVariationChecked =
    name.includes("variation") && type.includes("location")
      ? variation.locations.includes(value)
      : variation.team.includes(value);

  const inputCheckbox = name.includes("variation")
    ? isVariationChecked
    : isChecked;

  const typeName = type.includes("location") ? "locations" : "team";

  function onClickHandler() {
    onCheckboxHandler(typeName, value, name);
  }

  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-100 w-full ${className}`}
    >
      <input
        type="checkbox"
        checked={inputCheckbox}
        value={value}
        className="mr-4"
        name={id}
        onChange={onClickHandler}
      />{" "}
      {label}
    </div>
  );
}
