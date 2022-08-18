import { useFormContext } from "react-hook-form";

import toSlug from "@/lib/toSlug";

interface Props {
  placeholder: string;
  label: string;
  type?: string;
  className?: string;
  name?: string;
}

export default function LabelledInput({
  placeholder,
  label,
  type,
  className,
  name,
}: Props) {
  const { register, formState }: any = useFormContext();
  const { errors } = formState;

  const id = toSlug(label);
  const inputType = type ? type : "text";
  const inputClassName = className ? className : "relative my-5 ";
  const inputName = name ? name : id;

  const labelClassName = errors[inputName] ? "-mt-1" : "";

  console.log("inputName", inputName);

  return (
    <div className={inputClassName}>
      <input
        type={inputType}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full h-12 text-sm text-gray-900 rounded-lg border border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
        placeholder={placeholder}
        {...register(inputName)}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500 duration-300 transform ${labelClassName} -translate-y-4 scale-45 top-1 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-80 peer-focus:-translate-y-3 left-1`}
      >
        {label}
      </label>
      <p className="text-red-500 text-xs text-left mt-1">
        {errors[inputName]?.message}
      </p>
    </div>
  );
}
