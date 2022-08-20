import { useDispatch } from "react-redux";

import staffFormContent from "@/json/create-staff.json";
import Button from "@/components/UI/Button";
import SimpleInput from "@/components/Form/FormElement/SimpleInput";
import { updateSidebar } from "@/redux/ui-slice";

export default function CreateStaffForm() {
  const dispatch = useDispatch();

  function cancelHandler() {
    dispatch(updateSidebar(null));
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
            className="bg-blue-500 text-white w-32 h-10 hover:bg-blue-800"
          />
        </div>
      </form>
    </div>
  );
}
