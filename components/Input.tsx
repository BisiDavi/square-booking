import { displayFormIcons } from "@/lib/displayFormIcons";

interface Props {
  icon?: string;
  placeholder: string;
  type: string;
  onChange?: () => void;
}

export default function Input({
  icon,
  onChange,
  placeholder,
  type = "text",
}: Props) {
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
        className="px-3 py-3 border border-gray-300 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
        onChange={onChange}
      />
    </div>
  );  
}
