import { useState } from "react";

import variationTabContent from "@/json/variation-tab.json";
import toSlug from "@/lib/toSlug";
import VariationTabItem from "@/components/Tab/VariationTabItem";
import FormGroup from "@/components/Form/FormElement/FormGroup";
import VarationTabWrapper from "@/components/Tab/VarationTabWrapper";

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
          {variationTabContent.header.map((variationItem) => {
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
        {activeTab === "details" ? (
          <VarationTabWrapper>
            {variationTabContent.details.main.map((mainItemInput) => (
              <FormGroup input={mainItemInput} key={mainItemInput.name} />
            ))}
            <div className="duration mt-6">
              {variationTabContent.details.duration.map((mainItemInput) => (
                <FormGroup input={mainItemInput} key={mainItemInput.name} />
              ))}
            </div>
          </VarationTabWrapper>
        ) : activeTab === "online-booking" ? (
          <VarationTabWrapper>
            <div className="online-booking mt-6">
              {variationTabContent.onlineBooking.bookable.map(
                (mainItemInput) => (
                  <FormGroup input={mainItemInput} key={mainItemInput.name} />
                )
              )}
            </div>
          </VarationTabWrapper>
        ) : (
          <VarationTabWrapper>
            <div className="online-booking mt-6">
              <FormGroup input={variationTabContent.locations} />
            </div>
          </VarationTabWrapper>
        )}
      </div>
    </>
  );
}
