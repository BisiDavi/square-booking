import { useQueryClient } from "react-query";

import UploadIcon from "@/components/Form/FormElement/UploadIcon";
import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import Button from "@/components/UI/Button";
import VariationModal from "@/components/Modal/VariationModal";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateModal } from "@/redux/ui-slice";
import createService from "@/json/create-service.json";
import { resetForm } from "@/redux/form-slice";
import { formatService } from "@/lib/formatForm";
import useCreateServiceMutation from "@/hooks/useCreateServiceMutation";

export default function CreateServiceForm() {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.UI);
  const { form } = useAppSelector((state) => state.Form);
  const serviceFormData = formatService(form);
  const { mutate, isLoading } = useCreateServiceMutation();
  const queryClient = useQueryClient();

  function modalHandler() {
    dispatch(updateModal("variation-modal"));
  }

  function createServiceHandler(e: any) {
    e.preventDefault();
    mutate(serviceFormData, {
      onSuccess: (data: any) => {
        console.log("data-createServiceHandler", data);
        dispatch(resetForm());
      },
      onSettled: () => {
        queryClient.invalidateQueries("listServices");
      },
      onError: (error: any) => {
        console.log("error", error);
      },
    });
  }

  function closeModalHandler() {
    dispatch(updateModal(null));
  }

  function cancelHandler() {
    dispatch(resetForm());
  }

  return (
    <>
      {modal === "variation-modal" && (
        <VariationModal modal={modal} toggleModal={closeModalHandler} />
      )}
      <h2 className="text-center font-bold text-3xl py-3">Create Service</h2>
      <form
        onSubmit={createServiceHandler}
        className="bg-white rounded-md p-8 w-11/12 mx-auto my-4 flex flex-col"
      >
        <div className="main flex items-start">
          <div className="w-4/5 mr-4">
            {createService.main.map((input) =>
              displayFormElement(input, input.name)
            )}
          </div>
          <UploadIcon />
        </div>
        <div className="others w-11/12">
          <div className="price-duration">
            <h3 className="my-3 text-lg font-medium">Price and Duration</h3>
            {createService.priceDuration.map((input) =>
              displayFormElement(input, input.name)
            )}
            {form?.["pricetype-service"] !== "VARIABLE_PRICING" &&
              createService.price.map((input) =>
                displayFormElement(input, input.name)
              )}
            {createService.cancellationPrice.map((input) =>
              displayFormElement(input, input.name)
            )}
          </div>
          <div className="duration mt-6">
            {createService.duration.map((input) =>
              displayFormElement(input, input.name)
            )}
            {form?.["blockextratime-service"] &&
              createService.afterAppointment.map((input) =>
                displayFormElement(input, input.name)
              )}
          </div>
          <div className="bookable mt-6">
            {createService.online.map((input) =>
              displayFormElement(input, input.name)
            )}
            {form?.["bookablebycustomersonline-service"] &&
              createService.bookable.map((input) =>
                displayFormElement(input, input.name)
              )}
          </div>
          <Button
            className="text-blue-500 w-full mt-6 py-3 text-left px-4 border hover:bg-gray-100"
            text="Add Variation"
            onClick={modalHandler}
          />
        </div>
        <div className="button-group flex mt-10 justify-center items-center w-3/5 mx-auto justify-between">
          <Button
            text="Cancel"
            className="border border-blue-500 text-blue-500 w-32 h-10 hover:bg-blue-200"
            onClick={cancelHandler}
          />
          <Button
            text="Create Staff"
            type="submit"
            className="bg-blue-500 text-white w-32 h-10 hover:bg-blue-800 mx-auto flex items-center justify-center"
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}
