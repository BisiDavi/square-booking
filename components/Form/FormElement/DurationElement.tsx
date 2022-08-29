import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface SelectElementProps {
  name: string;
  options: number[];
  label: string;
  formType: string;
  inputName: string;
}

function SelectElement({
  name,
  options,
  label,
  formType,
  inputName,
}: SelectElementProps) {
  const { onChangeHandler, getInputValue } = useReduxForm();
  const inputId = formElementId(`${label}-${name}-${inputName}`, formType);
  const value = getInputValue(inputId);

  function onClickHandler(e: any) {
    onChangeHandler(e, inputId);
  }

  return (
    <select
      id={inputId}
      name={inputId}
      value={value}
      onChange={onClickHandler}
      className="px-2 h-full bg-transparent font-bold mr-10 text-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0"
    >
      {options.map((option, index) => {
        const optionName =
          name === "hours" && option <= 1
            ? "hr"
            : name === "hours"
            ? "hrs"
            : name === "minutes" && option <= 1
            ? "min"
            : "mins";

        return (
          <option key={`${option}-${index}`} value={option}>
            {option} {optionName}
          </option>
        );
      })}
    </select>
  );
}

interface Props {
  input: {
    label: string;
    formType: string;
    name: string;
  };
}

export default function DurationElement({ input }: Props) {
  const { label, formType, name } = input;
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  return (
    <div className={`select-group flex items-center h-12 border`}>
      <label
        className="bg-gray-200 text-gray-900 px-3 py-4 border-b border-white font-bold h-full items-center flex"
        htmlFor="select-group"
      >
        {label}
      </label>
      <div className="select-group flex items-center px-4" id="select-group">
        <SelectElement
          name="hours"
          inputName={name}
          options={hours}
          label={label}
          formType={formType}
        />
        <SelectElement
          name="minutes"
          inputName={name}
          options={minutes}
          label={label}
          formType={formType}
        />
      </div>
    </div>
  );
}
