import useRequestMutation from "@/hooks/useRequestMutation";
import { deleteCustomer } from "@/requests/postRequests";

export default function useDeleteCustomerMutation() {
  return useRequestMutation((id) => deleteCustomer(id), {
    mutationKey: "useDeleteCustomerMutation",
    success: "customer deleted",
    error: "unable to delete customer.",
  });
}
