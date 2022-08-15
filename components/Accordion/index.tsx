import toSlug from "@/lib/toSlug";
import { PropsWithChildren, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

interface AccordionItemProps {
  icon?: JSX.Element;
  title: string;
}

export function AccordionItem({
  title,
  icon,
  children,
}: PropsWithChildren<AccordionItemProps>) {
  const [showAccordion, setShowAccordion] = useState(false);

  function toggleAccordion() {
    setShowAccordion((prevState) => !prevState);
  }
  const headerClassName = showAccordion ? "border-b" : "";
  return (
    <div className="accordion-item bg-white border border-gray-200 my-1 rounded-md">
      <h2
        className={`accordion-header ${headerClassName} mb-0 flex items-center justify-between px-4`}
        id={toSlug(title)}
        onClick={toggleAccordion}
      >
        <button
          className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-3
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${toSlug(title)}`}
          aria-expanded="true"
          aria-controls={toSlug(title)}
        >
          {icon} {title}
        </button>
        <button>
          {showAccordion ? (
            <BsArrowUpCircle className="text-2xl" />
          ) : (
            <BsArrowDownCircle className="text-2xl" />
          )}
        </button>
      </h2>
      {showAccordion && (
        <div
          id={toSlug(title)}
          className="accordion-collapse collapse show"
          aria-labelledby={toSlug(title)}
          data-bs-parent="#accordion"
        >
          <div className="accordion-body py-4 px-5">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function Accordion({ children }: PropsWithChildren<{}>) {
  return (
    <div className="accordion" id="accordion">
      {children}
    </div>
  );
}
