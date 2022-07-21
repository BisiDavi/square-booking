import React from "react";

interface Props {
  className: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
  text: string;
}

export default function Button({ className, onClick, type, text }: Props) {
  return (
    <>
      <button className={className} onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
}
