import customerBookingForm from "@/json/customerBookingform.json";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";

export default function CustomerBookingForm() {
  return (
    <div className="mt-6 w-4/5">
      {customerBookingForm.map((formElement, index: any) =>
        displayFormElement(formElement, index)
      )}
    </div>
  );
}
  