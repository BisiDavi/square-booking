import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

interface AccordionItemButtonProps {
  showAccordion: boolean;
}

export default function AccordionItemButton({
  showAccordion,
}: AccordionItemButtonProps) {
  return (
    <>
      {showAccordion ? (
        <BsArrowUpCircle className="text-2xl" />
      ) : (
        <BsArrowDownCircle className="text-2xl" />
      )}
    </>
  );
}
