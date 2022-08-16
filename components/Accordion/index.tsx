import { PropsWithChildren, useState } from "react";

import toSlug from "@/lib/toSlug";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionItemButton from "./AccordionItemButton";

interface AccordionItemProps {
  icon?: JSX.Element;
  title: string;
  accordion?: boolean;
  setTeamAccordion?: any;
}

export function AccordionItem({
  title,
  icon,
  children,
  accordion,
  setTeamAccordion,
}: PropsWithChildren<AccordionItemProps>) {
  const [showAccordion, setShowAccordion] = useState(false);
  function toggleAccordion() {
    if (title === "Team") {
      setTeamAccordion((prevState: boolean) => !prevState);
    } else {
      setShowAccordion((prevState) => !prevState);
    }
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
          aria-expanded="true"
          aria-controls={toSlug(title)}
        >
          {icon} {title}
        </button>
        <button>
          {title === "Team" && accordion ? (
            <AccordionItemButton showAccordion={accordion} />
          ) : (
            <AccordionItemButton showAccordion={showAccordion} />
          )}
        </button>
      </h2>
      {title === "Team" && accordion ? (
        <AccordionBody title={title}>{children}</AccordionBody>
      ) : (
        showAccordion && <AccordionBody title={title}>{children}</AccordionBody>
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
