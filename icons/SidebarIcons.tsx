import { AiOutlineHome } from "react-icons/ai";
import {
  BsFillCalendarPlusFill,
  BsFillPersonLinesFill,
  BsInstagram,
  BsPersonBadge,
} from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { MdMiscellaneousServices, MdPermMedia } from "react-icons/md";

function displaySidebarIcons(icon: string) {
  switch (icon) {
    case "Overview":
      return <AiOutlineHome />;
    case "Calendar":
      return <BsFillCalendarPlusFill />;
    case "CMS":
      return <HiPencilAlt />;
    case "Services":
      return <MdMiscellaneousServices />;
    case "Customers":
      return <BsFillPersonLinesFill />;
    case "Media Library":
      return <MdPermMedia />;
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
  return <span className="text-xl">{displaySidebarIcons(icon)}</span>;
}
