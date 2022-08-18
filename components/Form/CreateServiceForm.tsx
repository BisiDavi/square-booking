import Button from "@/components/UI/Button";
import { useAppDispatch } from "@/redux/store";
import { updateService } from "@/redux/view-slice";

export default function CreateServiceForm() {
  const dispatch = useAppDispatch();

  function goBackHandler() {
    dispatch(updateService("create-service"));
  }

  return (
    <div className="m-4 ">
      <div className="button-group justify-between flex items-center">
        <Button
          text="back"
          className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-opacity-70"
          onClick={goBackHandler}
        />
        <Button
          text="Save"
          className="bg-purple-900 text-white px-3 py-1 rounded-lg hover:bg-opacity-70"
        />
      </div>
      <div className="form-content mt-4">
        <h2 className="font-bold text-xl text-center">Create a Service</h2>
      </div>
    </div>
  );
}
