/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

import {
  //  createCatalogCategory,
  searchCatalogObject,
} from "@/requests";

type defaultOptions = { label: string; value: string }[];

export default function CategoryDropdown() {
  const [defaultOptions, setDefaultOptions] = useState<defaultOptions>([
    { label: "None", value: "NONE" },
  ]);
  const { data, status } = useQuery("searchCatalogObject", () =>
    searchCatalogObject({ objectTypes: ["CATEGORY"] })
  );

  console.log("defaultOptions", defaultOptions);

  function getCategories() {
    const parsedData = JSON.parse(data.data);
    let defaultOptionsArray = [{ label: "None", value: "NONE" }];
    parsedData.objects.map((itemData: any) => {
      defaultOptionsArray.push({
        label: itemData?.categoryData?.name,
        value: itemData?.id,
      });
    });
    return defaultOptionsArray;
  }

  useMemo(() => {
    if (status === "success") {
      const defaultOptionsArray = getCategories();
      setDefaultOptions(defaultOptionsArray);
    }
  }, [status]);

  const filterCategories = (inputValue: string) => {
    return defaultOptions.filter(
      (i) => i.label.toLowerCase().includes(inputValue.toLowerCase())

      //   if (!filterResult) {
      //     createCatalogCategory(inputValue);
      //   }
    );
  };

  const promiseOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      resolve(filterCategories(inputValue));
    });

  return (
    <div className="categorydropdown flex items-center h-12 mt-1">
      <label
        className="bg-gray-300 text-gray-900 px-3 py-4 border-b border-gray-100 font-bold items-center flex"
        htmlFor="categoryDropdown"
      >
        Category
      </label>
      <AsyncCreatableSelect
        id="categoryDropdown"
        cacheOptions
        className="w-3/4 h-12"
        defaultOptions={defaultOptions}
        classNamePrefix="categoryDropdown"
        loadOptions={promiseOptions}
        placeholder="Select Category"
      />
      <style jsx>
        {`
          .categorydropdown {
            width: 750px;
          }
          .categorydropdown label {
            width: 230px;
          }
          .categorydropdown select {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
