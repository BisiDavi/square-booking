import { AiOutlineHome } from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsInstagram,
  BsPersonBadge,
} from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";

function displaySidebarIcons(icon: string) {
  switch (icon) {
    case "Home":
      return <AiOutlineHome />;
    case "Services":
      return <MdMiscellaneousServices />;
    case "Customers":
      return <BsFillPersonLinesFill />;
    case "Team":
      return <RiTeamLine />;
    case "Staff":
      return <BsPersonBadge />;
    case "Account & Settings":
      return <FiSettings />;
    case "Link with Instagram":
      return <BsInstagram />;
  }
}

interface Props {
  icon: string;
}

export default function SidebarIcons({ icon }: Props) {
  return <span className="text-3xl">{displaySidebarIcons(icon)}</span>;
}
