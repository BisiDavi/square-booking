import createService from "@/json/create-service.json";
import NewInput from "@/components/Form/FormElement/NewInput";
import NewTextArea from "@/components/Form/FormElement/NewTextArea";
import UploadIcon from "@/components/Form/FormElement/UploadIcon";

export default function TempCreateServiceForm() {
  return (
    <div className="bg-white rounded-md p-8 w-11/12 mx-auto my-4 flex flex-col p">
      <div className="main flex  items-start">
        <div className="w-4/5">
          {createService.main.map((service, index) => {
            return service.elementType === "input" ? (
              <NewInput input={service} index={index} />
            ) : (
              service.elementType === "textarea" && (
                <NewTextArea input={service} />
              )
            );
          })}
        </div>
        <UploadIcon />
      </div>
      <div className="price-duration">
        {createService.priceDuration.map((service, index) => {
          return (
            service.elementType === "input" && (
              <NewInput input={service} index={index} />
            )
          );
        })}
      </div>
    </div>
  );
}
