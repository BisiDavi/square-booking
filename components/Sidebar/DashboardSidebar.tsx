import Link from "next/link";
import { useRouter } from "next/router";

import sidebarContent from "@/json/dashboard-sidebar.json";
import SidebarIcons from "@/icons/SidebarIcons";

interface Props {
  linkGroup: "links";
}

function SidebarLinks({ linkGroup }: Props) {
  const router = useRouter();

  return (
    <ul>
      {sidebarContent[linkGroup].map((content) => {
        const activeLink =
          router.asPath === content.link ? "text-purple-500" : "";
        return (
          <li
            className={`my-2 border-b hover:bg-gray-100 p-2 px-6 hover:text-purple-500 ${activeLink}`}
            key={content.link}
          >
            <Link href={content.link} passHref>
              <a className="flex items-center">
                <SidebarIcons icon={content.text} />
                <span className="ml-2 text-xl">{content.text}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function DashboardSidebar() {
  return (
    <aside className="w-1/5 h-screen border border-r fixed top-20">
      <SidebarLinks linkGroup="links" />
    </aside>
  );
}
