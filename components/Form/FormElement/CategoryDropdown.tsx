/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

import { createCatalogCategory, searchCatalogObject } from "@/requests";

type defaultOptions = { label: string; value: string }[];

export default function CategoryDropdown() {
  const [defaultOptions, setDefaultOptions] = useState<defaultOptions>([
    { label: "None", value: "NONE" },
  ]);
  const { data, status } = useQuery("searchCatalogObject", () =>
    searchCatalogObject({ objectTypes: ["CATEGORY"] })
  );

  console.log("data-data", data);

  console.log("defaultOptions", defaultOptions);

  useEffect(() => {
    if (status === "success" && defaultOptions.length === 0) {
      data?.objects.map((itemData: any) => {
        setDefaultOptions([
          ...defaultOptions,
          { label: itemData?.categoryData?.name, value: itemData?.id },
        ]);
      });
    }
  }, [status]);

  const filterColors = (inputValue: string) => {
    return defaultOptions.filter((i) => {
      const filterResult = i.label
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      console.log("filterResult", filterResult);
      if (!filterResult) {
        createCatalogCategory(inputValue);
      }
    });
  };

  const promiseOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      resolve(filterColors(inputValue));
    });

  return (
    <AsyncCreatableSelect
      cacheOptions
      className="mt-5 w-3/4"
      defaultOptions={defaultOptions}
      loadOptions={promiseOptions}
      placeholder="Select Location"
    />
  );
}
