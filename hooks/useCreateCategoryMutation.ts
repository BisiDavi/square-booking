import useRequestMutation from "@/hooks/useRequestMutation";
import { createCatalogCategory } from "@/requests/postRequests";

export default function useCreateCategoryMutation() {
  return useRequestMutation((category) => createCatalogCategory(category), {
    mutationKey: "useOnboardingMutation",
    success: "category created",
    error: "unable to create category",
  });
}
