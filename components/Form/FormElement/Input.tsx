import { useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

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
  const [showPassword, setShowPassword] = useState(false);

  function updatePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }
  const inputType =
    type === "password" && showPassword
      ? "text"
      : type === "password" && !showPassword
      ? "password"
      : type;

  return (
    <div className="input-form mb-3">
      <div className="relative flex w-full flex-wrap items-center items-stretch">
        {icon && (
          <span className="z-10 h-full mb-0 leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 pt-4">
            {displayFormIcons(icon)}
          </span>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          aria-invalid={errors[name] ? "true" : "false"}
          className={`px-3 py-3 border border-gray-300 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full ${inputClassName}`}
          {...register(name)}
        />
        {type === "password" && (
          <button
            onClick={updatePasswordVisibility}
            className="absolute right-3 top-2.5"
            type="button"
          >
            {showPassword ? (
              <AiFillEyeInvisible className="text-2xl" />
            ) : (
              <AiFillEye className="text-2xl" />
            )}
          </button>
        )}
      </div>
      <p className="text-red-500 text-sm">{errors[name]?.message}</p>
    </div>
  );
}
