import Button from "@/components/UI/Button";
import { useAppDispatch } from "@/redux/store";
import { updateService } from "@/redux/view-slice";
import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import Select from "@/components/Form/FormElement/Select";
import Textarea from "@/components/Form/FormElement/Textarea";
import UploadIcon from "./FormElement/UploadIcon";

export default function CreateServiceForm() {
  const dispatch = useAppDispatch();

  function goBackHandler() {
    dispatch(updateService("create-service"));
  }

  return (
    <div className="m-4">
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
      <div className="form-content mt-4 py-4 bg-white h-screen container rounded-xl">
        <h2 className="font-bold text-xl text-center">Create a Service</h2>
        <div className="content w-11/12 mx-auto">
          <form>
            <div className="row flex items-center">
              <div className="inputGroup mt-2 w-4/5">
                <LabelledInput placeholder="eg:Barbing" label="Service Name" />
                <Select label="Category" />
              </div>
              <UploadIcon />
            </div>
            <Textarea
              label="Description"
              placeholder="Add a service description, describe details like features, benefits"
            />
            <div className="variations">
              <div className="row flex items-center justify-between">
                <h4 className="font-bold text-xl">Variations</h4>
                <h6 className="font-bold">Variations</h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
