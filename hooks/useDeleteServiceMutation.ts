import useRequestMutation from "@/hooks/useRequestMutation";
import { deleteService } from "@/requests/postRequests";

export default function useDeleteServiceMutation() {
  return useRequestMutation((id) => deleteService(id), {
    mutationKey: "useDeleteServiceMutation",
    success: "Service deleted",
    error: "unable to delete Service.",
  });
}
