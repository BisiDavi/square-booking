import { useRouter } from "next/router";

import customerBookingForm from "@/json/customerBookingform.json";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import Button from "@/components/UI/Button";
import { useAppSelector } from "@/hooks/useRedux";
import { formatCustomerBookingForm } from "@/lib/formatForm";
import getBookingStartData from "@/lib/getBookingStartData";
import useCreateBookingMutation from "@/hooks/useCreateBookingMutation";
import { getCustomerDetails } from "@/lib/getCustomerDetails";

export default function CustomerBookingForm() {
  const { form } = useAppSelector((state) => state.Form);
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const { bookingDate, bookingTime } = useAppSelector((state) => state.Booking);
  const customerbookingFormData = formatCustomerBookingForm(form);
  const router = useRouter();
  const timeZone =
    storeProfile !== null ? storeProfile?.timezone : "America/Anchorage";
  const locationId = storeProfile && storeProfile.id;
  const { mutate, isLoading } = useCreateBookingMutation();

  const serviceVariationId = `${router.query.id}`;
  const teamMemberId = `${router.query.teamMember}`;

  async function getFormData() {
    if (bookingDate && bookingTime) {
      const startDate = getBookingStartData(bookingDate, bookingTime, timeZone);
      const customerDetails = await getCustomerDetails(customerbookingFormData);

      const data = {
        ...customerbookingFormData,
        locationId,
        customerId: customerDetails.id,
        startAt: startDate,
        appointmentSegments: [
          {
            teamMemberId,
            serviceVariationId,
          },
        ],
      };
      return data;
    }
  }

  function submitHandler() {
    mutate(getFormData, {
      onSuccess: (data: any) => {
        console.log("onsuccess-data", data);
      },
      onError: (error: any) => {
        console.log("onsuccess-error", error);
      },
    });
  }

  return (
    <form className="mt-6 w-4/5" onSubmit={submitHandler}>
      {customerBookingForm.map((formElement, index: any) =>
        displayFormElement(formElement, index)
      )}
      <Button
        text="Submit"
        type="submit"
        loading={isLoading}
        className="bg-purple-800 hover:bg-opacity-80 py-2 px-3 mx-auto font-bold flex items-center mt-10 text-white "
      />
    </form>
  );
}
