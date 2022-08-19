import toSlug from "@/lib/toSlug";

interface Props {
  input: {
    name: string;
    type: string;
    placeholder: string;
    label: string;
  };
}

export default function NewTextArea({ input }: Props) {
  const { name, placeholder, label } = input;
  const id = toSlug(label);
  return (
    <div className="input-group flex items-center h-32 border-r border-gray-300">
      <label
        className="w-72 bg-gray-300 py-3 text-gray-900 px-3 font-bold h-full border-b border-gray-100 items- flex h-full"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={4}
        name={name}
        placeholder={placeholder}
        className="placeholder-gray-300 py-3 px-3 h-full w-full items-center font-bold border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
      ></textarea>
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
