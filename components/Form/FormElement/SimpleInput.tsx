import useReduxForm from "@/hooks/useReduxForm";

interface Props {
  input: {
    name: string;
    type?: string;
    placeholder: string;
    formType: string;
  };
}

export default function SimpleInput({ input }: Props) {
  const { name, type, placeholder, formType } = input;
  const inputType = type ? type : "text";
  const { getInputValue, onChangeHandler } = useReduxForm();
  const id = getInputValue(`${name}-${formType}`);
  return (
    <div className="simple input my-3">
      <input
        type={inputType}
        id={id}
        name={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus:border-1 block w-full p-2.5  placeholder-gray-400 text-white"
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e, id)}
      />
    </div>
  );
}
