import { useState } from "react";

import TabItem from "@/components/Tab/TabItem";

interface Props {
  tabBody1: JSX.Element;
  tabBody2: JSX.Element;
  tabHeader: [string, string];
}

export default function Tabs({ tabBody1, tabBody2, tabHeader }: Props) {
  const [openTab, setOpenTab] = useState(0);
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabHeader.map((tab, index) => (
              <TabItem
                key={`${tab}-${index}`}
                index={index}
                openTab={openTab}
                text={tab}
                setOpenTab={setOpenTab}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words border border-gray-200 bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 0 ? "block" : "hidden"} id="link1">
                  {tabBody1}
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link2">
                  {tabBody2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
