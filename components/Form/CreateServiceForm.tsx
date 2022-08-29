import UploadIcon from "@/components/Form/FormElement/UploadIcon";
import Button from "@/components/UI/Button";
import VariationModal from "@/components/Modal/VariationModal";
import useCreateServiceForm from "@/hooks/useCreateServiceForm";
import VariationTable from "../Tables/VariationTable";

export default function CreateServiceForm() {
  const {
    createServiceFormElement,
    cancelHandler,
    closeModalHandler,
    createServiceHandler,
    modalHandler,
    isLoading,
    form,
    modal,
  } = useCreateServiceForm();

  console.log("form", form);

  const { allVariations } = form;
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
          <div className="w-4/5 mr-4">{createServiceFormElement("main")}</div>
          <UploadIcon />
        </div>
        <div className="others w-11/12">
          <div className="price-duration">
            <h3 className="my-3 text-lg font-medium">Price and Duration</h3>
            {createServiceFormElement("priceDuration")}
            {form?.["pricetype-service"] !== "VARIABLE_PRICING" &&
              createServiceFormElement("price")}
            {createServiceFormElement("cancellationPrice")}
          </div>
          <div className="duration mt-6">
            {createServiceFormElement("duration")}

            {form?.["blockextratime-service"] &&
              createServiceFormElement("afterAppointment")}
          </div>
          <div className="bookable mt-6">
            {createServiceFormElement("online")}

            {form?.["bookablebycustomersonline-service"] &&
              createServiceFormElement("bookable")}
          </div>
          <Button
            className="text-blue-500 w-full mt-6 py-3 text-left px-4 border hover:bg-gray-100"
            text="Add Variation"
            onClick={modalHandler}
          />
        </div>
        {allVariations.length > 0 && (
          <div className="variation">
            <h6 className="text-center my-4 text-lg font-medium ">
              Variations
            </h6>
            <VariationTable />
          </div>
        )}
        <div className="button-group flex mt-10 justify-center items-center w-3/5 mx-auto justify-between">
          <Button
            text="Cancel"
            className="border border-blue-500 text-blue-500 w-32 h-10 hover:bg-blue-200"
            onClick={cancelHandler}
          />
          <Button
            text="Create Service"
            type="submit"
            className="bg-blue-500 text-white w-32 h-10 hover:bg-blue-800 mx-auto flex items-center justify-center"
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}
