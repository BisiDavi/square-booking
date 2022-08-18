import toSlug from "@/lib/toSlug";

interface Props {
  label: string;
  placeholder: string;
}

export default function Textarea({ placeholder, label }: Props) {
  const id = toSlug(label);

  return (
    <div className="text-area my-2 relative">
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 mt-0.5  peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500  border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 peer"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
