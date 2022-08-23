import customerBookingForm from "@/json/customerBookingform.json";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import Button from "@/components/UI/Button";
import { useAppSelector } from "@/hooks/useRedux";
import { formatCustomerBookingForm } from "@/lib/formatForm";

export default function CustomerBookingForm() {
  const { form } = useAppSelector((state) => state.Form);
  const customerbookingFormData = formatCustomerBookingForm(form);

  function submitHandler() {}

  return (
    <form className="mt-6 w-4/5" onSubmit={submitHandler}>
      {customerBookingForm.map((formElement, index: any) =>
        displayFormElement(formElement, index)
      )}
      <Button
        text="Submit"
        type="submit"
        className="bg-purple-800 hover:bg-opacity-80 py-2 px-3 mx-auto font-bold flex items-center mt-10 text-white "
      />
    </form>
  );
}
