import { BiUpload } from "react-icons/bi";

import Button from "@/components/UI/Button";
import { useAppDispatch } from "@/redux/store";
import { updateService } from "@/redux/view-slice";
import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import Select from "@/components/Form/FormElement/Select";
import Textarea from "@/components/Form/FormElement/Textarea";

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
      <div className="form-content mt-4 py-4 bg-white h-screen container rounded-xl">
        <h2 className="font-bold text-xl text-center">Create a Service</h2>
        <div className="content w-11/12 mx-auto">
          <form>
            <div className="row flex items-center">
              <div className="inputGroup w-5/6">
                <LabelledInput placeholder="eg:Barbing" label="Service Name" />
                <Select label="Category" />
              </div>
              <div className="h-40 upload-service-icon flex justify-center items-center bg-gray-500 w-2/6 ml-4 rounded-md">
                <Button
                  text="upload icon"
                  className="text-md font-medium items-center text-white border border-gray-100 py-2 px-3 rounded-md hover:bg-gray-900 hover:border-gray-900  flex"
                  icon={<BiUpload className="mr-1 text-xl" />}
                />
              </div>
            </div>
            <Textarea
              label="Description"
              placeholder="Add a service description, describe details like features, benefits"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
