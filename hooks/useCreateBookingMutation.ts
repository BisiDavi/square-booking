import useRequestMutation from "@/hooks/useRequestMutation";
import { createBooking } from "@/requests/postRequests";

export default function useCreateBookingMutation() {
  return useRequestMutation((formData) => createBooking(formData), {
    mutationKey: "useCreateBookingMutation",
    success: "booking created successfully",
    error: "an error occured",
  });
}
