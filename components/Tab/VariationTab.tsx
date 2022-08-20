import { useState } from "react";

import variationTab from "@/json/variation-tab.json";
import toSlug from "@/lib/toSlug";
import VariationTabItem from "@/components/Tab/VariationTabItem";

export default function VariationTab() {
  const [activeTab, setActiveTab] = useState("details");

  function tabHandler(tab: string) {
    setActiveTab(tab);
  }

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="variationTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {variationTab.header.map((variationItem) => {
            const id = toSlug(variationItem);
            return (
              <VariationTabItem
                key={id}
                id={id}
                tab={variationItem}
                tabHandler={tabHandler}
              />
            );
          })}
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
}
