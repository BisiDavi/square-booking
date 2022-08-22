import useRequestMutation from "@/hooks/useRequestMutation";
import { createService } from "@/requests/postRequests";

export default function useCreateServiceMutation() {
  return useRequestMutation((serviceForm) => createService(serviceForm), {
    mutationKey: "useCreateServiceMutation",
    success: "service created",
    error: "error creating service",
  });
}
