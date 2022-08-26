import { useState } from "react";

import variationTabContent from "@/json/variation-tab.json";
import toSlug from "@/lib/toSlug";
import VariationTabItem from "@/components/Tab/VariationTabItem";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import VarationTabWrapper from "@/components/Tab/VarationTabWrapper";

export default function VariationTab() {
  const [activeTab, setActiveTab] = useState("details");

  function tabHandler(tab: string) {
    setActiveTab(tab);
  }

  return (
    <div className="border rounded-lg px">
      <div className="mb-4 border-b border-gray-200 border-gray-700">
        <ul
          className="flex flex-wrap items-center mx-auto justify-between px-4 text-sm font-medium text-center"
          id="variationTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {variationTabContent.header.map((variationItem) => {
            const id = toSlug(variationItem);
            const activeClassName =
              activeTab === id
                ? "text-blue-600 hover:text-blue-600 text-blue-500 hover:text-blue-500  border-blue-500"
                : "";
            return (
              <VariationTabItem
                key={id}
                id={id}
                className={activeClassName}
                tab={variationItem}
                tabHandler={tabHandler}
              />
            );
          })}
        </ul>
      </div>
      <div id="myTabContent">
        {activeTab === "details" ? (
          <VarationTabWrapper>
            {variationTabContent.details.main.map((mainItemInput) =>
              displayFormElement(mainItemInput, mainItemInput.name)
            )}
            <div className="duration mt-6">
              {variationTabContent.details.duration.map((mainItemInput) =>
                displayFormElement(mainItemInput, mainItemInput.name)
              )}
            </div>
          </VarationTabWrapper>
        ) : activeTab === "online-booking" ? (
          <VarationTabWrapper>
            <div className="online-booking overflow-y-scroll">
              {variationTabContent.onlineBooking.bookable.map((mainItemInput) =>
                displayFormElement(mainItemInput, mainItemInput.name)
              )}
              <div className="team mt-6">
                {displayFormElement(
                  variationTabContent.onlineBooking.team,
                  "variationTabContent.onlineBooking.team"
                )}
              </div>
            </div>
          </VarationTabWrapper>
        ) : (
          <VarationTabWrapper>
            <div className="online-booking mt-6">
              {displayFormElement(
                variationTabContent.locations,
                "variationTabContent.locations"
              )}
            </div>
          </VarationTabWrapper>
        )}
      </div>
    </div>
  );
}
