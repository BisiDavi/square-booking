/* eslint-disable unused-imports/no-unused-vars */
import { useQuery } from "react-query";
import AsyncCreatableSelect from "react-select/async-creatable";

import { createCatalogCategory, searchCatalogObject } from "@/requests";
import { useState } from "react";

type defaultOptions = { label: string; value: string }[];

export default function CategoryDropdown() {
  const [defaultOptions, setDefaultOptions] = useState<defaultOptions>([]);
  const { data, status } = useQuery("searchCatalogObject", () =>
    searchCatalogObject({ objectTypes: ["CATEGORY"] })
  );

  console.log("data-data", data);

  let defaultOptionsArray = [{ label: "None", value: "NONE" }];

  if (status === "success" && defaultOptions.length === 0) {
    data?.objects.map((itemData: any) => {
      defaultOptionsArray = [
        ...defaultOptionsArray,
        { label: itemData?.categoryData?.name, value: itemData?.id },
      ];
    });
    setDefaultOptions(defaultOptionsArray);
  }

  const filterColors = (inputValue: string) => {
    return defaultOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string, dataArray: any[]) =>
    new Promise((resolve) => {
      createCatalogCategory(inputValue);
      resolve(filterColors(inputValue));
    });

  return (
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions={defaultOptions}
      loadOptions={promiseOptions}
    />
  );
}
