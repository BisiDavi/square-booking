import { AiFillTags } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
import Link from "next/link";

interface Props {
  icon: JSX.Element;
  text: string;
  link: string;
}

function QuicLinkItem({ icon, text, link }: Props) {
  return (
    <li>
      <Link href={link}>
        <a className="font-bold my-2 text-blue-500 hover:text-red-500 flex items-center">
          {icon}
          {text}
        </a>
      </Link>
    </li>
  );
}

export default function QuickLinks() {
  return (
    <div className="quick-task mt-4">
      <h3 className="font-medium">Quick Task to Get You Started</h3>
      <ul>
        <QuicLinkItem
          icon={<AiFillTags className="mr-2 text-xl" />}
          text="Add A Service You Render to Customers"
          link="admin/services"
        />
        <QuicLinkItem
          icon={<BsPersonBadge className="mr-2 text-xl" />}
          text=" Add A New Staff"
          link="admin/staff"
        />
      </ul>
    </div>
  );
}
