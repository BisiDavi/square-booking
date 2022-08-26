import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import customerBookingForm from "@/json/customerBookingform.json";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import Button from "@/components/UI/Button";
import { useAppSelector } from "@/hooks/useRedux";
import { formatCustomerBookingForm } from "@/lib/formatForm";
import useCreateBookingMutation from "@/hooks/useCreateBookingMutation";
import { getCustomerDetails } from "@/lib/getCustomerDetails";
import { resetForm } from "@/redux/form-slice";
import { resetBooking, setAppointment } from "@/redux/booking-slice";
import { updateModal } from "@/redux/ui-slice";

export default function CustomerBookingForm() {
  const { form } = useAppSelector((state) => state.Form);
  const dispatch = useDispatch();
  const { appointment, bookingDate, bookingTime } = useAppSelector(
    (state) => state.Booking
  );
  const customerbookingFormData = formatCustomerBookingForm(form);
  const { mutateAsync, isLoading } = useCreateBookingMutation();

  async function getFormData() {
    if (bookingDate && bookingTime) {
      const customerDetails = await getCustomerDetails(customerbookingFormData);
      const data = {
        ...customerbookingFormData,
        ...appointment,
        customerId: customerDetails?.id,
      };

      return data;
    }
  }

  async function submitHandler(e: any) {
    e.preventDefault();
    const formdata = await getFormData();
    mutateAsync(formdata, {
      onSuccess: () => {
        dispatch(resetForm());
        dispatch(resetBooking());
        dispatch(setAppointment(null));
        dispatch(updateModal("successful-booking-modal"));
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
