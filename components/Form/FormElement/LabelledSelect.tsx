import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  input: {
    name: string;
    options: { text: string; value: string }[];
    placeholder?: string;
    label: string;
    formType: string;
  };
}

export default function LabelledSelect({ input }: Props) {
  const { getInputValue, onChangeHandler } = useReduxForm();

  const { formType, options, name, placeholder, label } = input;
  const id = formElementId(name, formType);

  const value = getInputValue(id);

  return (
    <div className={`input-group flex items-center h-12`}>
      <label
        className="bg-gray-200 text-gray-900 px-3 py-4 border-b border-white font-bold h-full items-center flex"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="placeholder-gray-300 bg-transparent px-3 h-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeHandler(e, id)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
