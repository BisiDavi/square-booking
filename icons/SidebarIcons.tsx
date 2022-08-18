import { AiOutlineHome } from "react-icons/ai";
import { GrServices } from "react-icons/gr";

function displaySidebarIcons(icon: string) {
  switch (icon) {
    case "HOME":
      return <AiOutlineHome />;
    case "Services":
      return <GrServices />;
    case "Customers":
      return <GrServices />;
  }
}

interface Props {
  icon: string;
}

export default function SidebarIcons({ icon }: Props) {
  return <>{displaySidebarIcons(icon)}</>;
}
