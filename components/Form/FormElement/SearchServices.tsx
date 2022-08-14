import { useState } from "react";

export default function SearchServices() {
  const [query, setQuery] = useState("");

  function onChangeHandler(e: any) {
    setQuery(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        value={query}
        className="input p-3 px-5 rounded-lg bg-gray-200 w-2/5"
        placeholder="Search for services"
        onChange={onChangeHandler}
      />
    </>
  );
}
