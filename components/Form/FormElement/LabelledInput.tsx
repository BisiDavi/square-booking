import toSlug from "@/lib/toSlug";

interface Props {
  placeholder: string;
  label: string;
  type?: string;
}

export default function LabelledInput({ placeholder, label, type }: Props) {
  const id = toSlug(label);
  const inputType = type ? type : "text";
  return (
    <div className="relative my-4">
      <input
        type={inputType}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full h-12 text-sm text-gray-900 rounded-lg border border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 mt-0.5  peer-focus:px-2 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  );
}
