import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import Button from "@/components/UI/Button";
import { useAppDispatch } from "@/redux/store";
import { updateService } from "@/redux/view-slice";

export default function CreateServiceView() {
  const dispatch = useAppDispatch();

  function createServiceHandler() {
    dispatch(updateService("create-service-form"));
  }

  return (
    <div className="service-page flex items-center justify-center h-1/2">
      <div className="create-service  border border-gray-400 rounded h-52 p-5">
        <MdMiscellaneousServices className="font-bold text-6xl  p-2 bg-white mb-4 rounded-full mx-auto flex items-center justify-center" />
        <h4 className="font-medium text-lg">
          Create Services you want customers to book with names, photos and
          prices to speed-up Booking
        </h4>
        <Button
          text="Create Service"
          className="bg-site-purple text-white py-1 px-3 flex items-center mx-auto my-4 rounded-lg hover:bg-blue-500"
          icon={<AiOutlinePlus className="mr-2 font-bold" />}
          onClick={createServiceHandler}
        />
      </div>
    </div>
  );
}
