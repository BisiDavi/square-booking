import { useFormContext } from "react-hook-form";

import { displayFormIcons } from "@/lib/displayFormIcons";

interface Props {
  icon?: string;
  placeholder: string;
  type: string;
  name: string;
}

export default function Input({
  icon,
  name,
  placeholder,
  type = "text",
}: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  const inputClassName = icon ? "pl-10" : "";
  console.log("errors", errors);
  return (
    <div className="relative flex w-full flex-wrap items-center items-stretch mb-3">
      {icon && (
        <span className="z-10 h-full mb-0 leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 pt-4">
          {displayFormIcons(icon)}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        aria-invalid={errors[name] ? "true" : "false"}
        className={`px-3 py-3 border border-gray-300 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full ${inputClassName}`}
        {...register(name)}
      />
      <p className="text-red-500 text-sm">{errors[name]?.message}</p>
    </div>
  );
}
