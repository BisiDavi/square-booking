import { PropsWithChildren } from "react";

import toSlug from "@/lib/toSlug";

interface AccordionBodyProps {
  title: string;
}

export default function AccordionBody({
  title,
  children,
}: PropsWithChildren<AccordionBodyProps>) {
  return (
    <div
      id={toSlug(title)}
      className="accordion-collapse collapse show"
      aria-labelledby={toSlug(title)}
    >
      <div className="accordion-body py-4 px-5">{children}</div>
    </div>
  );
}
