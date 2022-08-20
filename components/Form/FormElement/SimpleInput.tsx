import toSlug from "@/lib/toSlug";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
}

export default function SimpleInput({ name, type, placeholder }: Props) {
  const id = toSlug(name);
  const inputType = type ? type : "text";
  return (
    <div>
      <input
        type={inputType}
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}
