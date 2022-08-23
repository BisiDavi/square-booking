import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import customerBookingForm from "@/json/customerBookingform.json";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import Button from "@/components/UI/Button";
import { useAppSelector } from "@/hooks/useRedux";
import { formatCustomerBookingForm } from "@/lib/formatForm";
import getBookingStartData from "@/lib/getBookingStartData";
import useCreateBookingMutation from "@/hooks/useCreateBookingMutation";
import { getCustomerDetails } from "@/lib/getCustomerDetails";
import { resetForm } from "@/redux/form-slice";
import { resetBooking } from "@/redux/booking-slice";

export default function CustomerBookingForm() {
  const { form } = useAppSelector((state) => state.Form);
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const dispatch = useDispatch();
  const { bookingDate, bookingTime } = useAppSelector((state) => state.Booking);
  const customerbookingFormData = formatCustomerBookingForm(form);
  const router = useRouter();
  const { teamMember, serviceId, version, duration } = router.query;
  const durationMinutes = Number(duration) / 6000;
  const timeZone =
    storeProfile !== null ? storeProfile?.timezone : "America/Anchorage";
  const locationId = storeProfile && storeProfile.id;
  const { mutateAsync, isLoading } = useCreateBookingMutation();

  async function getFormData() {
    if (bookingDate && bookingTime) {
      const startDate = getBookingStartData(bookingDate, bookingTime, timeZone);
      const customerDetails = await getCustomerDetails(customerbookingFormData);
      const data = {
        ...customerbookingFormData,
        locationId,
        customerId: customerDetails?.id,
        startAt: startDate,
        appointmentSegments: [
          {
            durationMinutes,
            serviceVariationId: serviceId,
            teamMemberId: teamMember,
            serviceVariationVersion: version,
          },
        ],
      };
      console.log("data,", data);
      return data;
    }
  }

  async function submitHandler(e: any) {
    e.preventDefault();
    const formdata = await getFormData();
    mutateAsync(formdata, {
      onSuccess: (data: any) => {
        console.log("onsuccess-data", data);
        dispatch(resetForm());
        dispatch(resetBooking());
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.errors[0].detail);
        console.log("onsuccess-error", error);
      },
    });
  }

  return (
    <>
      {bookingDate && bookingTime && (
        <form className="mt-6 lg:w-4/5 w-full" onSubmit={submitHandler}>
          {customerBookingForm.map((formElement, index: any) =>
            displayFormElement(formElement, index)
          )}
          <Button
            text="Submit"
            type="submit"
            loading={isLoading}
            className="bg-purple-800 w-24 flex justify-center hover:bg-opacity-80 py-2 px-3 mx-auto font-bold flex items-center mt-10 text-white "
          />
        </form>
      )}
    </>
  );
}
