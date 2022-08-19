import { createCustomer } from "@/requests/postRequests";
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

function saveCustomerToDb(writeData: any, getAuthdetails: any, data: any) {
  const authDetails = getAuthdetails();
  const uid = authDetails.uid;
  if (typeof data === "object") {
    const stringifyData = JSON.stringify(data);
    writeData(
      stringifyData,
      `/users/${uid}/square/customer/${data.customer.id}`
    );
  } else if (typeof data === "string") {
    const responseData: any = JSON.parse(data);
    writeData(
      data,
      `/users/${uid}/square/customer/${responseData.customer.id}`
    );
  }
}

export default function useCustomerMutation() {
  const { writeData, getAuthdetails } = useFirebase();
  function useCreateSquareCustomer() {
    return useRequestMutation(createSquareCustomer, {
      mutationKey: "useCreateSquareCustomer",
      success: "Customer created Successfully",
      onSuccessMethodWithData: (data: any) =>
        saveCustomerToDb(writeData, getAuthdetails, data),
      error: "Error creating customer",
    });
  }

  return { useCreateSquareCustomer };
}
