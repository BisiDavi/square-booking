import { createCustomer } from "@/requests";
import useRequestMutation from "@/hooks/useRequestMutation";
import useFirebase from "@/hooks/useFirebase";

import type { createCustomerType } from "@/types/request-types";

function createSquareCustomer({
  email,
  lastName,
  firstName,
}: createCustomerType) {
  return createCustomer({ email, lastName, firstName });
}

function saveCustomerToDb(writeData: any, data: any) {
  console.log("typeof data", typeof data);
  if (typeof data === "object") {
    const stringifyData = JSON.stringify(data);
    writeData(stringifyData, `/users/user/${data.customer.id}`);
  } else if (typeof data === "string") {
    const responseData: any = JSON.parse(data);
    console.log("responseData", responseData);
    writeData(data, `/users/${responseData?.customer.id}`);
  }
}

export default function useCustomerMutation() {
  const { writeData } = useFirebase();
  function useCreateSquareCustomer() {
    return useRequestMutation(createSquareCustomer, {
      mutationKey: "useCreateSquareCustomer",
      success: "Customer created Successfully",
      onSuccessMethodWithData: (data: any) => saveCustomerToDb(writeData, data),
      error: "Error creating customer",
    });
  }

  return { useCreateSquareCustomer };
}
