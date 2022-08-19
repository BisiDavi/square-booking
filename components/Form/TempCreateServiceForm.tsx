import createService from "@/json/create-service.json";
import NewInput from "@/components/Form/FormElement/NewInput";
import NewTextArea from "@/components/Form/FormElement/NewTextArea";
import UploadIcon from "@/components/Form/FormElement/UploadIcon";
import CategoryDropdown from "@/components/Form/FormElement/CategoryDropdown";

export default function TempCreateServiceForm() {
  return (
    <div className="bg-white rounded-md p-8 w-11/12 mx-auto my-4 flex flex-col p">
      <div className="main flex  items-start">
        <div className="w-4/5">
          {createService.main.map((service) => {
            return service.elementType === "input" ? (
              <NewInput input={service} />
            ) : service.elementType === "textarea" ? (
              <NewTextArea input={service} />
            ) : (
              service.elementType === "categoryDropdown" && <CategoryDropdown />
            );
          })}
        </div>
        <UploadIcon />
      </div>
      <div className="price-duration">
        <h3 className="my-3 text-lg font-medium">Price and Duration</h3>
        {createService.priceDuration.map((service) => {
          return (
            service.elementType === "input" && <NewInput input={service} />
          );
        })}
      </div>
    </div>
  );
}
