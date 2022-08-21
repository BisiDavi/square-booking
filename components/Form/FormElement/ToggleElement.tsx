import useReduxForm from "@/hooks/useReduxForm";
import toSlug from "@/lib/toSlug";

interface Props {
  input: {
    label: string;
    name: string;
  };
}

export default function ToggleElement({ input }: Props) {
  const { label, name } = input;
  const id = toSlug(label);
  const { getInputValue, onChangeHandler } = useReduxForm();
  const value = getInputValue(name);

  return (
    <div className="toggle py-4 w-full border px-6">
      <label
        htmlFor={id}
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value={value}
          className="sr-only peer"
          name={name}
          id={id}
          onChange={(e) => onChangeHandler(e, name)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-bold text-gray-900 text-gray-900">
          {label}
        </span>
      </label>
    </div>
  );
}
