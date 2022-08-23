/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";

import BookingSidebar from "@/components/Sidebar/BookingSidebar";
import GetStaff from "@/components/Team/GetStaff";
import CustomerBookingForm from "@/components/Form/CustomerBookingForm";
import ServiceCard from "@/components/Card/ServiceCard";

export default function BookingView() {
  const router = useRouter();
  const staffId: any = router.query.teamMember;

  return (
    <div className="content container flex lg:flex-row flex-col lg:items-start lg:mx-auto py-4 pt-10">
      <div className="lg:w-3/5 w-full px-6">
        <h3 className="text-lg tect-center lg:text-start lg:text-3xl font-medium">
          Please, pick a date for your appointment
        </h3>
        <>
          <ServiceCard />
          <div className="pill rounded-xl p-5 border border-gray-500 w-full lg:w-3/4 mt-5 hover:bg-gray-100">
            <GetStaff staffId={staffId} />
          </div>
          <div className="wrapper hidden lg:flex">
            <CustomerBookingForm />
          </div>
        </>
      </div>
      <BookingSidebar />
    </div>
  );
}
