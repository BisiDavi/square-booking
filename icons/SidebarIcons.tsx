import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsPersonBadge } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

function displaySidebarIcons(icon: string) {
  switch (icon) {
    case "Home":
      return <AiOutlineHome />;
    case "Services":
      return <GrServices />;
    case "Customers":
      return <BsFillPersonLinesFill />;
    case "Team":
      return <RiTeamLine />;
    case "Staff":
      return <BsPersonBadge />;
    case "Account & Settings":
      return <FiSettings />;
  }
}

interface Props {
  icon: string;
}

export default function SidebarIcons({ icon }: Props) {
  return <span className="text-3xl">{displaySidebarIcons(icon)}</span>;
}
