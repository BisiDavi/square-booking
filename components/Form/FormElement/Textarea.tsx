import useReduxForm from "@/hooks/useReduxForm";
import formElementId from "@/lib/formElementId";

interface Props {
  input: {
    type: string;
    placeholder: string;
    label: string;
    formType: string;
  };
}

export default function TextArea({ input }: Props) {
  const { placeholder, label, formType } = input;
  const id = formElementId(label, formType);
  const { getInputValue, onChangeHandler } = useReduxForm();
  const value = getInputValue(id);

  return (
    <div className="input-group flex items-center h-32">
      <label
        className="w-72 bg-gray-200 py-3 text-gray-900 px-3 font-bold h-full border-b border-gray-100 items- flex h-full"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        name={id}
        value={value}
        placeholder={placeholder}
        className="placeholder-gray-300 py-3 px-3 h-full w-full items-center border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        onChange={(e) => onChangeHandler(e, id)}
      ></textarea>
    </div>
  );
}
