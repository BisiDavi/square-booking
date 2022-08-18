import Link from "next/link";

import sidebarContent from "@/json/dashboard-sidebar.json";
import SidebarIcons from "@/icons/SidebarIcons";

export default function DashboardSidebar() {
  return (
    <aside className="w-1/4 h-screen border border-r fixed top-32">
      <ul className="link-list">
        {sidebarContent.map((content) => (
          <li className="my-4 hover:bg-gray-100 p-2 px-6 hover:text-purple-500" key={content.link}>
            <Link href={content.link} passHref>
              <a className="flex items-center">
                <SidebarIcons icon={content.text} />
                <span className="ml-2 text-xl">{content.text}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
