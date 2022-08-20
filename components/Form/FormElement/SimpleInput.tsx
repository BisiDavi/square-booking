import toSlug from "@/lib/toSlug";

interface Props {
  input: {
    name: string;
    type?: string;
    placeholder: string;
  };
}

export default function SimpleInput({ input }: Props) {
  const { name, type, placeholder } = input;
  const id = toSlug(name);
  const inputType = type ? type : "text";
  return (
    <div className="simple input my-3">
      <input
        type={inputType}
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus:border-1 block w-full p-2.5  placeholder-gray-400 text-white"
        placeholder={placeholder}
      />
    </div>
  );
}
