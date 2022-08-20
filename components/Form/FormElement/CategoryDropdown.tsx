/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

import {
  //  createCatalogCategory,
  searchCatalogObject,
} from "@/requests/postRequests";

type defaultOptions = { label: string; value: string }[];

export default function CategoryDropdown() {
  const [defaultOptions, setDefaultOptions] = useState<defaultOptions>([
    { label: "None", value: "NONE" },
  ]);
  const { data, status } = useQuery("searchCatalogObject", () =>
    searchCatalogObject({ objectTypes: ["CATEGORY"] })
  );

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
    return defaultOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterCategories(inputValue));
      }, 1000);
    });

  return (
    <div className="categorydropdown flex items-center">
      <label
        className="bg-gray-300 text-gray-900 px-3 py-4 border-b border-white font-bold items-center flex"
        htmlFor="categoryDropdown"
      >
        Category
      </label>
      <AsyncCreatableSelect
        id="categoryDropdown"
        className="w-3/4"
        classNamePrefix="categoryDropdown"
        placeholder="Select Category"
        cacheOptions
        onChange={(inputValue) => console.log("inputValue", inputValue)}
        defaultOptions={defaultOptions}
        loadOptions={promiseOptions}
      />
      <style jsx>
        {`
          .categorydropdown {
            width: 95%;
            height: 50px;
          }
          .categorydropdown label {
            width: 225px;
            height: 50px;
          }
          .categorydropdown select {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
