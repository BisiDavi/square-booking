import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Creatable, { useCreatable } from "react-select/async-creatable";
import { ActionMeta, OnChangeValue } from "react-select";

import toSlug from "@/lib/toSlug";
import Button from "@/components/UI/Button";

interface Props {
  input: {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    options: {
      text: string;
      value: string;
    }[];
  };
  index: number;
}

export default function CategoryDropdown({ input, index }: Props) {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState("None");
  const [options, setOptions] = useState([""]);
  const { name, options, label } = input;
  const id = toSlug(label);
  const inputClassName = index === 0 ? "border-t" : "border-b";

  function toggleDropdown() {
    setDropdown(true);
  }

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
      {!dropdown && (
        <button
          className="dropdown w-full relative hover:bg-blue-200 h-14"
          onClick={toggleDropdown}
        >
          <FaChevronDown className="absolute right-10" />
        </button>
      )}
      <input
        id={name}
        name="dropdown-search"
        className="placeholder-gray-300 px-3 h-full py-4 font-bold border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
        type="text"
        placeholder="Search"
      />
      {options.map((option) => (
        <Button
          text={option.text}
          key={option.value}
          className="text-blue-300 hover:bg-blue-200 h-14"
        />
      ))}
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
