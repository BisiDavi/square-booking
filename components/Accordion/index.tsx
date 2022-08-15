import toSlug from "@/lib/toSlug";
import { PropsWithChildren } from "react";

interface AccordionItemProps {
  icon?: JSX.Element;
  title: string;
}

export function AccordionItem({
  title,
  icon,
  children,
}: PropsWithChildren<AccordionItemProps>) {
  return (
    <div className="accordion-item bg-white border border-gray-200">
      <h2 className="accordion-header mb-0" id={toSlug(title)}>
        <button
          className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
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
      </h2>
      <div
        id={toSlug(title)}
        className="accordion-collapse collapse show"
        aria-labelledby={toSlug(title)}
        data-bs-parent="#accordion"
      >
        <div className="accordion-body py-4 px-5">{children}</div>
      </div>
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
