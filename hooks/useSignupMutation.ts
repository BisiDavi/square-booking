/* eslint-disable unused-imports/no-unused-vars */
import { createCustomer } from "@/requests";
import type { createCustomerType } from "@/types/request-types";
import useRequestMutation from "@/hooks/useRequestMutation";

function createSquareCustomer({
  email,
  lastName,
  firstName,
}: createCustomerType) {
  return createCustomer({ email, lastName, firstName });
}

export default function useSignupMutation() {
  function useSquareCustomerSignup() {
    return useRequestMutation(createSquareCustomer, "squareSignupMutation", {
      success: "Customer created Successfully",
      error: "Error creating customer",
    });
  }

  return { useSquareCustomerSignup };
}
