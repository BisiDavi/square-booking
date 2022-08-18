import useRequestMutation from "@/hooks/useRequestMutation";
import { onboardUser } from "@/requests";

export default function useOnboardingMutation() {
  return useRequestMutation((email) => onboardUser(email), {
    mutationKey: "useOnboardingMutation",
    success: "Hello, seems you've been onboarded before, welcome back",
    error: "Hold on, we are redirecting you to square.",
  });
}
