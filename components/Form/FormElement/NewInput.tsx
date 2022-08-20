import toSlug from "@/lib/toSlug";

interface Props {
  input: {
    name: string;
    type: string;
    placeholder?: string;
    label: string;
  };
}

export default function NewInput({ input }: Props) {
  const { name, type, placeholder, label } = input;
  const id = toSlug(label);
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
      />
    </div>
  );
}
