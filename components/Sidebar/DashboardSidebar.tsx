import Link from "next/link";

import sidebarContent from "@/json/dashboard-sidebar.json";
import SidebarIcons from "@/icons/SidebarIcons";

interface Props {
  linkGroup: "links" | "extras";
}

function SidebarLinks({ linkGroup }: Props) {
  return (
    <ul>
      {sidebarContent[linkGroup].map((content) => (
        <li
          className="my-4 hover:bg-gray-100 p-2 px-6 hover:text-purple-500"
          key={content.link}
        >
          <Link href={content.link} passHref>
            <a className="flex items-center">
              <SidebarIcons icon={content.text} />
              <span className="ml-2 text-xl">{content.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function DashboardSidebar() {
  return (
    <aside className="w-1/5 h-screen border border-r fixed top-20">
      <SidebarLinks linkGroup="links" />
      <hr className="mb-10 mt-2" />
      <SidebarLinks linkGroup="extras" />
    </aside>
  );
}
