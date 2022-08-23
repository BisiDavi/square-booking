import useRequestMutation from "@/hooks/useRequestMutation";
import { onboardUser } from "@/requests/postRequests";

export default function useCreateBookingMutation() {
  return useRequestMutation((email) => onboardUser(email), {
    mutationKey: "useCreateBookingMutation",
    success: "Hello, seems you've been onboarded before, welcome back",
    error: "Hold on, we are redirecting you to square.",
  });
}
