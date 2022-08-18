import Link from "next/link";

import sidebarContent from "@/json/dashboard-sidebar.json";

export default function DashboardLeftSidebar() {
  return (
    <aside>
      <ul className="link-list">
        {sidebarContent.map((content) => (
          <li className="my-2" key={content.link}>
            <Link href={content.link} passHref>
              <a>{content.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
