/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineWarning } from "react-icons/ai";

import BookingCalendar from "@/components/Calendar/BookingCalendar";
import { useAppSelector } from "@/hooks/useRedux";
import PickServiceTime from "@/components/Services/PickServiceTime";
import CustomerBookingForm from "@/components/Form/CreateServiceForm";



export default function BookingSidebar() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <div className="lg:w-2/5 w-full px-4 bg-gray-100 flex flex-col items-center justify-center">
      <div className="calender-wrapper w-full lg:w-11/12 mx-0 border border-gray-400 rounded-lg my-6">
        <BookingCalendar />
      </div>
      <h4 className="font-bold text-lg text-gray-500 mb-0">
        Select Appointment Time
      </h4>
      <div className="notice bg-orange-500 pl-4 mt-1 mb-4 text-white flex py-4 px-2">
        <AiOutlineWarning className="text-3xl mr-1" />
        <p className="word-break text-sm">
          <b>HEADS UP!</b> Please note that Times below are shown in{" "}
          {storeProfile?.timezone} time.
        </p>
      </div>
      {storeProfile && <PickServiceTime />}
      <div className="wrapper flex lg:hidden">
        <CustomerBookingForm />
      </div>
    </div>
  );
}
