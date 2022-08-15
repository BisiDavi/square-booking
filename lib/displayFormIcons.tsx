import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";

export function displayFormIcons(icon: string) {
  switch (icon) {
    case "email":
      return <AiOutlineMail />;
    case "password":
      return <RiLockPasswordLine />;
    case "person":
      return <IoMdPerson />;
  }
}

interface Props {
  icon: string;
}

export default function FormIcons({ icon }: Props) {
  return <>{displayFormIcons(icon)}</>;
}
