import useRequestMutation from "@/hooks/useRequestMutation";
import { createService } from "@/requests/postRequests";

export default function useCreateServiceMutation() {
  return useRequestMutation((serviceForm) => createService(serviceForm), {
    mutationKey: "useOnboardingMutation",
    success: "category created",
    error: "unable to create category",
  });
}
