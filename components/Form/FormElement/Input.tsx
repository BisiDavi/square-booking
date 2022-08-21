import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  input: {
    type: string;
    placeholder?: string;
    label: string;
    formType: string;
  };
}

export default function Input({ input }: Props) {
  const { getInputValue, onChangeHandler } = useReduxForm();

  const { type, placeholder, label, formType } = input;
  const id = formElementId(label, formType);

  const value = getInputValue(id);

  return (
    <div className={`input-group flex items-center h-12`}>
      <label
        className="bg-gray-200 text-gray-900 px-3 py-4 border-b border-white font-bold h-full items-center flex"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="placeholder-gray-300 px-3 h-full py-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        type={type}
        min={0}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e, id)}
      />
    </div>
  );
}
