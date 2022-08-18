import toSlug from "@/lib/toSlug";

interface Props {
  label: string;
}

export default function Select({ label }: Props) {
  const id = toSlug(label);

  return (
    <div className="relative my-5">
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 mt-0.5  peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
      <select
        id="default"
        className="bg-gray-50 h-12 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 peer"
      >
        <option selected>Choose a {label}</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
