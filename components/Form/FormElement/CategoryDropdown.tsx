/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

import {
  //  createCatalogCategory,
  searchCatalogObject,
} from "@/requests/postRequests";
import useReduxForm from "@/hooks/useReduxForm";
import useCreateCategoryMutation from "@/hooks/useCreateCategoryMutation";
import { useQueryClient } from "react-query";

type defaultOptions = { label: string; value: string }[];

export default function CategoryDropdown() {
  const { getInputValue, onChangeHandler } = useReduxForm();
  const value = getInputValue("service-category");
  const { mutate, isLoading } = useCreateCategoryMutation();
  const [defaultOptions, setDefaultOptions] = useState<defaultOptions>([
    { label: "None", value: "NONE" },
  ]);
  const { data, status } = useQuery("searchCatalogObject", () =>
    searchCatalogObject({ objectTypes: ["CATEGORY"] })
  );
  const queryClient = useQueryClient();

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

  function selectHandler(inputValue: any) {
    onChangeHandler(inputValue, "service-category", true);
  }

  function onCreateHandler(inputValue: any) {
    mutate(inputValue, {
      onSuccess: (data: any) => {
        const parsedData = JSON.parse(data?.data).catalogObject;
        onChangeHandler(
          { label: parsedData.categoryData.name, value: parsedData.id },
          "service-category",
          true
        );
        queryClient.invalidateQueries("searchCatalogObject");
      },
    });
  }

  return (
    <div className="categorydropdown flex items-center">
      <label
        className="bg-gray-200 text-gray-900 px-3 py-4 border-b border-white font-bold items-center flex"
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
        value={value}
        isClearable
        isLoading={isLoading}
        onCreateOption={onCreateHandler}
        onChange={selectHandler}
        defaultOptions={defaultOptions}
        loadOptions={promiseOptions}
      />
      <style jsx>
        {`
          .categorydropdown {
            width: 100%;
            height: 50px;
          }
          .categorydropdown label {
            width: 227px;
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
