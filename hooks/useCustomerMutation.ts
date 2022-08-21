import { createCustomer } from "@/requests/postRequests";
import useRequestMutation from "@/hooks/useRequestMutation";

import type { createCustomerType } from "@/types/request-types";

function createSquareCustomer({
  email,
  lastName,
  firstName,
}: createCustomerType) {
  return createCustomer({ email, lastName, firstName });
}

export default function useCustomerMutation() {
  function useCreateSquareCustomer() {
    return useRequestMutation(createSquareCustomer, {
      mutationKey: "useCreateSquareCustomer",
      success: "Customer created Successfully",
      error: "Error creating customer",
    });
  }

  return { useCreateSquareCustomer };
}
