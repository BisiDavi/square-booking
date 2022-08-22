import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import staffFormContent from "@/json/create-staff.json";
import Button from "@/components/UI/Button";
import SimpleInput from "@/components/Form/FormElement/SimpleInput";
import { updateSidebar } from "@/redux/ui-slice";
import { useAppSelector } from "@/hooks/useRedux";
import { formatCreateStaff } from "@/lib/formatForm";
import useCreateStaffMutation from "@/hooks/useCreateStaffMutation";
import { resetForm } from "@/redux/form-slice";

export default function CreateStaffForm() {
  const dispatch = useDispatch();
  const { form } = useAppSelector((state) => state.Form);
  const { mutate, isLoading } = useCreateStaffMutation();
  const queryClient = useQueryClient();
  const staffFormData = formatCreateStaff(form);

  function createStaff() {
    mutate(staffFormData, {
      onSuccess: () => {
        queryClient.invalidateQueries("searchTeam");
        dispatch(resetForm());
        dispatch(updateSidebar(null));
      },
      onError: (error: any) => {
        console.log("error", error);
        toast.error(error?.response?.data.errors[0].detail);
      },
    });
  }

  function cancelHandler() {
    dispatch(updateSidebar(null));
    dispatch(resetForm());
  }

  return (
    <div className="mx-4 mt-4 relative">
      <form>
        {staffFormContent.map((inputItem) => (
          <SimpleInput input={inputItem} key={inputItem.name} />
        ))}
        <div className="button-group float-right w-2/3 mt-10 flex justify-between">
          <Button
            text="Cancel"
            className="border border-blue-500 text-blue-500 w-32 h-10 hover:bg-blue-200"
            onClick={cancelHandler}
          />
          <Button
            text="Create Staff"
            className="bg-blue-500 text-white w-32 h-10 hover:bg-blue-800 mx-auto flex items-center justify-center"
            onClick={createStaff}
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
