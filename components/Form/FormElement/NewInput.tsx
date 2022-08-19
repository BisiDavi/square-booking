import toSlug from "@/lib/toSlug";

interface Props {
  input: {
    name: string;
    type: string;
    placeholder?: string;
    label: string;
  };
  index: number;
}

export default function NewInput({ input, index }: Props) {
  const { name, type, placeholder, label } = input;
  const id = toSlug(label);
  const inputClassName = index % 2 >= 0 ? "border-t" : "border-b";
  return (
    <div
      className={`input-group flex items-center h-12 border-r ${inputClassName} border-gray-300`}
    >
      <label
        className="bg-gray-300 text-gray-900 px-3 py-4 border-b border-gray-100 font-bold h-full items-center flex"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="placeholder-gray-300 px-3 h-full py-4 font-bold border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        type={type}
        min={0}
        placeholder={placeholder}
      />
      <style jsx>
        {`
          .input-group {
            width: 750px;
          }
          .input-group label {
            width: 300px;
          }
          .input-group input {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
