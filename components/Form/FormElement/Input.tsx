/* eslint-disable unused-imports/no-unused-vars */
import toSlug from "@/lib/toSlug";
import { updateForm } from "@/redux/form-slice";
import { useAppDispatch } from "@/redux/store";

interface Props {
  input: {
    name: string;
    type: string;
    placeholder?: string;
    label: string;
  };
}

export default function Input({ input }: Props) {
  const dispatch = useAppDispatch();

  const { name, type, placeholder, label } = input;
  const id = toSlug(label);

  function inputChangeHandler(e: any) {
    dispatch(updateForm({ name, data: e.target.value }));
  }

  return (
    <div className={`input-group flex items-center h-12`}>
      <label
        className="bg-gray-200 text-gray-900 px-3 py-4 border-b border-white font-bold h-full items-center flex"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="placeholder-gray-300 px-3 h-full py-4 font-bold border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        type={type}
        min={0}
        placeholder={placeholder}
        onChange={inputChangeHandler}
      />
    </div>
  );
}
