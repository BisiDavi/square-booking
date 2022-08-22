import { createTeam } from "@/requests/postRequests";
import useRequestMutation from "@/hooks/useRequestMutation";

export default function useCreateStaffMutation() {
  return useRequestMutation((teamMember) => createTeam(teamMember), {
    mutationKey: "useCreateStaffMutation",
    success: "staff created",
    error: "unable to create staff",
  });
}
